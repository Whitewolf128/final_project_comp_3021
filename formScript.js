/*A function thats called upon when loaded*/
function load(){
    /*Shows this log upon loading and adds listeners to the buttons*/
    console.log("Form loaded!")
    document.getElementById("submit").addEventListener("click", submitForm);
    document.getElementById("reset").addEventListener("click", resetForm);
}
/*a function thats called upon by the click event listener from the submit button*/
function submitForm(){
    /*Logs a message to the console if it ran properly*/
    console.log("Button was clicked");
    console.log("The form was submitted.");
    /* once you hit submit it calls these functions*/
    isFNotEmpty();
    isLNotEmpty();
    isUNotEmpty();
    isValidEmail();
    cIsSelected();
    rIsSelected();
    colorPicked();
    time();
    dateSelected();
    telValid();

}
/*a function for checking if First name field is valid or not*/
function isFNotEmpty(){
    /*variables*/
    let fname = document.getElementById("fname").value;
    let fnameError = document.getElementById("fname_error");
    
    /*checks if there is a value than displays the value and returns if it is true*/
    if(fname != ""){
        console.log(fname);
        return true;
    } 
    /*checks if first name is blank if so displays the error message and returns it false*/
    else if(fname == ""){
        fnameError.style.display = "block";
        return false;

    }
}
/*a function for checking if Last name field is valid or not*/
function isLNotEmpty(){
    /*Variables*/
    let lname = document.getElementById("lname").value;
    let lnameError = document.getElementById("lname_error");

    /*checks if there is a value than displays the value and returns if it is true*/
    if(lname != ""){
        console.log(lname);
        return true;
    }
    else if(lname == ""){
        lnameError.style.display = "block";
        return false;
    }
}
    /*a function for checking if Username field is empty or not */
    function isUNotEmpty(){
        /*Variables*/
        let username = document.getElementById("uname").value;
        let unameError = document.getElementById("uname_error");
        
        /*checks if there is a value than displays the value and returns if it is true*/
        if(username != ""){
            console.log(username);
            return true;
        }
        /*checks if username is blank then displays an error*/
        else if(username == ""){
            unameError.style.display = "block";
            return false;
        }

}
/*A function that checks if the email is valid or not*/
function isValidEmail(email){
    /*Variables*/
    let pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let emailError = document.getElementById("email_error");
    
    /*checks if there is a value than displays the value and returns if it is true*/
    if(pattern.test(email)){
        console.log("Email is valid");
        return true;
    } 
    /*checks if the email is invalid then displays the error*/
    else{
        console.log("Email is invalid");
        emailError.style.display = "block";
        return false;
    }

}
/*a function that makes sure you picked a option*/
function cIsSelected(){
    /*Variables*/
    let option1 = document.getElementById("option1").value;
    let option2 = document.getElementById("option2").value;
    let option3 = document.getElementById("option3").value;
    let option4 = document.getElementById("option4").value;
    let option5 = document.getElementById("option5").value;
    let radioError = document.getElementById("radio_error"); 
    
    /*checks if a choice was selected and returns if it is true*/
    if (option1.checked){
        radioError.style.display = "none";
        return true;
        
    }
    /*checks if a choice was selected and returns if it is true*/
    if(option2.checked){
        radioError.style.display = "none";
        return true;
    }
    /*checks if a choice was selected and returns if it is true*/
    if(option3.checked){
        radioError.style.display = "none";
        return true;
    }
    /*checks if a choice was selected and returns if it is true*/
    if(option4.checked){
        radioError.style.display = "none";
        return true;
    }
    /*checks if a choice was selected and returns if it is true*/
    if(option5.checked){
        radioError.style.display = "none";
        return true;
    }
    /*Checks if no option was selected if there is no option then shows error*/
    else if(!option1.checked && !option2.checked && !option3.checked && !option4.checked && !option5.checked){
        radioError.style.display = "block";
        return false;
    }
}

/*a function that checks if any options were selected or not*/
function rIsSelected(){
    /*Variables*/
    let multiple1 = document.getElementById("multiple1");
    let multiple2 = document.getElementById("multiple2");
    let multiple3 = document.getElementById("multiple3");
    let multiple4 = document.getElementById("multiple4");
    let checkError = document.getElementById("check_error");
    /*Checks if an option was selected*/
    if(multiple1.checked){
        return true;
    }
    /*Checks if an option was selected*/
    if(multiple2.checked){
        return true;
    }
    /*Checks if an option was selected*/
    if(multiple3.checked){
        return true;
    }
    /*Checks if an option was selected*/
    if(multiple4.checked){
        return true;
    }
    /*Checks if no option was selected if there is no option then shows error*/
    else if(!multiple1.checked && !multiple2.checked && !multiple3.checked && !multiple4.checked){
        checkError.style.display = "block";
        return false;
    }
}
/*a function that grabs the colour value*/
function colorPicked(){
    /*Variables*/
    let colour = document.getElementById("color");
    let paragraphs = document.querySelectorAll("p");

    /*Checks if a colour is selected then grabs its value once its called*/
    colour.addEventListener("input", (event) => {
        paragraphs.forEach((p) => {
        p.style.color = event.target.value;
        return p;
        });
    });
}

/*A function that make sure you have selected a time value or not*/
function time(){
    /*Variables*/
    let timeError = document.getElementById("time_error");
    let timeIn = document.getElementById("time").value;
    
    /*Checks for a value and displays it in the log*/
    if(timeIn){
        console.log("Your favourite time of day is: ", timeIn.value);
        timeError.style.display = "none";
        return true;
    }
    /*checks if there is no value and displays an error*/
    else if(!timeIn){
        console.log("Need to pick a value");
        timeError.style.display = "block";
        return false;
    }
}

/*A function that makes sure that you have selected a date or not*/
function dateSelected(){
    /*variables*/
    let date = document.getElementById("date").value;
    let dateError = document.getElementById("date_error");

    /*checks if there is a value and if so displays it in the log*/
    if (date.value){
        console.log("The chosen date is: ", date);
        dateError.style.display = "none";
        return true;
        
    }

      /*checks if there is no value and displays both a log and the error*/
    else if(!date.value){
        console.log("You need to choose a proper date");
        dateError.style.display = "block";
        return false;
    }

}

/*checks if the phone number field has a value or not*/
function telValid(){
    /*Variables*/
    let numVal = document.getElementById("pn");
    let telError = document.getElementById("tel_error");

    /*checks if there is a value and displays it in the log*/
    if(numVal.value){
        console.log("Your phone number is: ", numVal);
        return true;
    }
    /*checks if there is no value and displays both a log and the error*/
    else if(!numVal.value){
        console.log("You need a valid phone number");
        telError.style.display = "block";
        return false;
    }
}
/*A function that gets called if the reset but is clicked*/
function resetForm(){
    /*variables*/
    let fnameError2 = document.getElementById("fname_error");
    let lnameError2 = document.getElementById("lname_error");
    let unameError2 = document.getElementById("uname_error");
    let emailError2 = document.getElementById("email_error");
    let radioError2 = document.getElementById("radio_error");
    let checkError2 = document.getElementById("check_error");
    let timeError2 = document.getElementById("time_error");
    let dateError2 = document.getElementById("date_error");
    let telError2 = document.getElementById("tel_error"); 
    /*Asks user if they want to refresh the page*/
    if(confirm('Do you want to refresh the page?')){
        /*removes errors upon reset*/
        fnameError2.style.display = "none";
        lnameError2.style.display = "none";
        unameError2.style.display = "none";
        emailError2.style.display = "none";
        radioError2.style.display = "none";
        checkError2.style.display = "none";
        timeError2.style.display = "none";
        dateError2.style.display = "none";
        telError2.style.display = "none";
    }  
}

/*loads the page and calls load*/
document.addEventListener("DOMContentLoaded", load);