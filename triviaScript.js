/**
 * Initializes the Trivia Game when the DOM is fully loaded.
 */
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("trivia-form");
    const questionContainer = document.getElementById("question-container");
    const newPlayerButton = document.getElementById("new-player");
    const uname = document.getElementById("username")
    const uscore = document.getElementById("score")
    // Initialize the game
    // checkUsername(); Uncomment once completed
    fetchQuestions();
    displayScores();

    /**
     * Fetches trivia questions from the API and displays them.
     */
    function fetchQuestions() {
        showLoading(true); // Show loading state

        fetch("https://opentdb.com/api.php?amount=10&type=multiple")
            .then((response) => response.json())
            .then((data) => {
                displayQuestions(data.results);
                showLoading(false); // Hide loading state
            })
            .catch((error) => {
                console.error("Error fetching questions:", error);
                showLoading(false); // Hide loading state on error
            });
    }

    /**
     * Toggles the display of the loading state and question container.
     *
     * @param {boolean} isLoading - Indicates whether the loading state should be shown.
     */
    function showLoading(isLoading) {
        document.getElementById("loading-container").classList = isLoading
            ? ""
            : "hidden";
        document.getElementById("question-container").classList = isLoading
            ? "hidden"
            : "";
    }

    /**
     * Displays fetched trivia questions.
     * @param {Object[]} questions - Array of trivia questions.
     */
    function displayQuestions(questions) {
        questionContainer.innerHTML = ""; // Clear existing questions
        questions.forEach((question, index) => {
            const questionDiv = document.createElement("div");
            questionDiv.innerHTML = `
                <p>${question.question}</p>
                ${createAnswerOptions(
                    question.correct_answer,
                    question.incorrect_answers,
                    index
                )}
            `;
            questionContainer.appendChild(questionDiv);
        });
    }

    /**
     * Creates HTML for answer options.
     * @param {string} correctAnswer - The correct answer for the question.
     * @param {string[]} incorrectAnswers - Array of incorrect answers.
     * @param {number} questionIndex - The index of the current question.
     * @returns {string} HTML string of answer options.
     */
    function createAnswerOptions(
        correctAnswer,
        incorrectAnswers,
        questionIndex
    ) {
        const allAnswers = [correctAnswer, ...incorrectAnswers].sort(
            () => Math.random() - 0.5
        );
        return allAnswers
            .map(
                (answer) => `
            <label>
                <input type="radio" name="answer${questionIndex}" value="${answer}" ${
                    answer === correctAnswer ? 'data-correct="true"' : ""
                }>
                ${answer}
            </label>
        `
            )
            .join("");
    }

    // Event listeners for form submission and new player button
    form.addEventListener("submit", handleFormSubmit);
    newPlayerButton.addEventListener("click", newPlayer);

    /**
     * Handles the trivia form submission.
     * @param {Event} event - The submit event.
     */
    function handleFormSubmit(event) {
        event.preventDefault();
        //... form submission logic including setting cookies and calculating score
        saveUser();
    }
    /**
     * Sets a cookie.
     * @param {string} name - The name of the cookie.
     * @param {string} value - The value of the cookie.
     * @param {number} days - The number of days to store the cookie.
     */

    function setCookies(name,value,days)
    {
        //variables
        let expires = "";
        //An if statement that sets up the expiry date
        if(days)
        {
            //setting an expire date
            const date = new Date();
            date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
            expires = "; expires=" + date.toUTCString();
        }
        //Creating a cookie
        document.cookie = name + "=" + (value || "") + expires + "; path=/";
        console.log("Cookies set:", document.cookie);
    }

    /**
     * Gets a cookie by name.
     * @param {string} name - The name of the cookie to get.
     * @returns {string|null} - The value of the cookie or null if not found.
     */
    //Gets the cookie data
    function getCookies(name)
    {
        //returns the cookie
        return document.cookie
        .split("; ")
        .find((row)=> row.startsWith(`${name}=`))
        ?.split("=")[1];
    }

    function saveUser()
    {
        const name = uname.value.trim();
        const score = uscore.value();

        if(name)
        {
            setCookies(uname, uscore, 3);
        }
        else
        {
            alert("Enter a valid name");
        }
    }

    function updateDisplay()
    {
        const savedName = getCookie("username");
        const savedScore = getCookies("score")

        const tbody = document.getElementById("table").getElementsByTagName("tbody")[0];

        const newRow = tbody.insertRow();

        cell1 = newRow.insertCell(0);
        cell2 = newRow.insertCell(1);

        cell1.innerHTML += uname;
        cell2.innerHTML += uscore;
    }
});