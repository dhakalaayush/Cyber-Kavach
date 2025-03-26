let currentIndex = 0; //This is the index of contents array

//loading contents function
function displayContent() {
    //clearing previous contents
    document.getElementById('questionHTML').innerHTML = "";
    document.getElementById('optionsHTML').innerHTML = "";
    document.getElementById('remarkHTML').innerHTML = "";

    //loading questions
    let currentQuestion = contents[currentIndex].question;
    document.getElementById('questionHTML').innerHTML = currentQuestion;

    //loading options, the elements in array should display in the form of buttons
    let currentOptions = contents[currentIndex].options;
    //looping through the elements of array creating buttons for each
    for (items of currentOptions) {
        let btn = document.createElement("button");

        btn.innerHTML = items;
        btn.classList.add("option"); // Adds the CSS class option to the buttons
        optionsHTML.appendChild(btn);  // Add button to the div optionsHTML
        //adding onclick event
        btn.onclick = function () {
            if (btn.innerHTML == contents[currentIndex].options[contents[currentIndex].correctIndex]) {
                //this is when the user clicks the correct option
                document.getElementById('remarkHTML').innerHTML = "You are correct!";
            }
            else {
                //this is when the user clicks the wrong option
                btn.style.background = "rgb(132, 2, 2)"; //show the clicked option as red
                document.getElementById('remarkHTML').innerHTML = "You are incorrect!";
            }
            button_array = document.getElementById("optionsHTML").getElementsByTagName("button"); //this returns array of the buttons
            for (buttons of button_array) {
                buttons.disabled = true; //disable the buttons
                //show the correct option as green
                if (buttons.innerHTML == contents[currentIndex].options[contents[currentIndex].correctIndex]) {
                    buttons.style.background = "rgb(7, 98, 0)";
                }
            }
        };
    }
}

// Function to show the final score at the end
function finalPage() {
    document.getElementById('questionHTML').innerHTML = "You have successfully completed this room.";
    document.getElementById('optionsHTML').innerHTML = "";
    document.getElementById('remarkHTML').innerHTML = "Congratulations on your today's learning";

    // Hide the Prev and Next button after the last question
    document.getElementById('nextButton').style.display = "none";
    document.getElementById('prevButton').style.display = "none";

    //show home page redirection buttion
    let homeButton = document.createElement("button");
    homeButton.classList.add("primary_button");
    homeButton.innerHTML = "Return Home";
    homeButton.onclick = function () {
        window.location.href = "pages/tools.html"; // Change to your actual homepage URL
    }
    document.querySelector(".container").appendChild(homeButton);
}


//calling displayContent function to display the contents (questions and options)
displayContent();

function prev() {
    if (currentIndex > 0) {
        currentIndex--;
        displayContent();
    }
}
function next() {
    if (currentIndex < contents.length - 1) {
        currentIndex++;
        displayContent();
    }
    else {
        finalPage();
    }
}


function validation() {
    // Form validation for "Connect with Us" page
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    const namePattern = /^[A-Za-z\s]+$/; // Allows only letters and spaces
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email format

    // Validate Name
    if (name === "") {
        alert("Name cannot be empty!");
        return false;
    }
    if (!namePattern.test(name)) {
        alert("Please enter a valid name!");
        return false;
    }

    // Validate Email
    if (email === "") {
        alert("Email cannot be empty!");
        return false;
    }
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address (e.g., user@example.com)!");
        return false;
    }

    // Validate Message
    if (message === "") {
        alert("Message cannot be empty!");
        return false;
    }

    alert("Message submitted")
    return true; // Allows form submission if everything is valid
}

