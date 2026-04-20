/*
Description: JavaScript behaviour for webpage
Group 2
Author: Patrick Arevalo
Hackathon 6
Date: Nov 12, 2025 
*/

/**
 * Initializes Webpage when the DOM is fully loaded.
 */
document.addEventListener("DOMContentLoaded", function () {

    const greetingSection = document.getElementById("greetingSection");
    const welcomeSection = document.getElementById("welcomeSection");

    const nameInput = document.getElementById("nameInput");
    const saveButton = document.getElementById("saveBtn");

    const welcomeMessage = document.getElementById("welcomeMessage");
    const removeButton = document.getElementById("removeBtn");

    /**
     * Sets a cookie.
     * @param {string} name - The name of the cookie.
     * @param {string} value - The value of the cookie.
     * @param {number} days - The number of days to store the cookie.
     */
    function setCookies(name, value, days)
    {
        let expires = "";

        // Set up date
        if (days)
        {
            const date = new Date();

            // Sets the time in milliseconds
            date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
            expires = "; expires=" + date.toUTCString();
        }

        // Create a cookie
        document.cookie = name + "=" + (value || "") + expires + "; path=/";
        console.log("Cookie set: ", document.cookie);
    }

    /**
     * Gets a cookie by name.
     * @param {string} name - The name of the cookie to get.
     * @returns {string|null} - The value of the cookie or null if not found.
     */
    function getCookie(name)
    {
        const cookie_name = name + "=";
        const cookie = document.cookie
            .split(";")
            .map(item => item.trim())
            .find(item => item.startsWith(cookie_name));

        if (!cookie)
        {
            return null;
        }

        return cookie.substring(cookie_name.length);
    }

    /**
     * Saves the user's name in a cookie and displays it.
     */
    function saveName()
    {
        const name = nameInput.value.trim();

        if (name)
        {
            setCookies("username", name, 6);
        }
        else
        {
            alert("Please enter a name!");
        }

        updateDisplay();
    }

    /**
     * Removes the name cookie and updates the display.
     */
    function removeName()
    {
        setCookies("username", "", -1);
        nameInput.value = "";
        updateDisplay();
    }

    /**
     * Checks for any existing name cookies and updates the
     * display.
     */
    function updateDisplay()
    {
        const savedName = getCookie("username");

        if (savedName)
        {
            greetingSection.style.display = "none";
            welcomeSection.style.display = "block";
            welcomeMessage.innerHTML = `Welcome, ${savedName}, let's get this bread.`;
        }
        else
        {
            greetingSection.style.display = "block";
            welcomeSection.style.display = "none";
        }
    }

    // Event listeners
    saveButton.addEventListener("click", saveName);
    removeButton.addEventListener("click", removeName);

    // Run on load
    updateDisplay();
});