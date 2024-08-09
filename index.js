// Setting up DOM
let elementClicked = false;
let humanChoice = "";

// Checking for user input
function getHumanChoice(){
    const choiceRock = document.querySelector(".button-rock");
    const choicePaper = document.querySelector(".button-paper");
    const choiceScissors = document.querySelector(".button-scissors");

    // Event listeners to get the user's choice
    choiceRock.addEventListener("click", function (){
        humanChoice = "r";
        elementClicked = true;
        playGame(); // Call playGame when a choice is made
    });

    choicePaper.addEventListener("click", function (){
        humanChoice = "p";
        elementClicked = true;
        playGame();
    });

    choiceScissors.addEventListener("click", function (){
        humanChoice = "s";
        elementClicked = true;
        playGame();
    });
}

// Generates a computer choice
function getComputerChoice() {
    const array = ["r", "p", "s"]; // Use const for array declaration
    const randomIndex = Math.floor(Math.random() * array.length); // Use camelCase for variable names
    return array[randomIndex];
}

// Displays computer choice based on option taken
function displayComputerChoice(computerChoice) {
    const computerChoiceDisplay = document.querySelector("#choice-text");
    if (computerChoice === "r") {
        computerChoiceDisplay.textContent = "Rock";
    } else if (computerChoice === "p") {
        computerChoiceDisplay.textContent = "Paper";
    } else if (computerChoice === "s") {
        computerChoiceDisplay.textContent = "Scissors";
    }
}

// Rock, Paper and Scissors game.
function playRound(humanChoice, computerChoice) {
    const resultDisplay = document.querySelector(".result-text");
    let roundWin = (humanChoice == "r" && computerChoice == "s") || 
    (humanChoice == "p" && computerChoice == "r") || 
    (humanChoice == "s" && computerChoice == "p");
    if (roundWin) {
        resultDisplay.textContent = "You win!";
        resultDisplay.style.color = "#3cb371";
    } else if (humanChoice === computerChoice) {
        resultDisplay.textContent = "Tie!";
        resultDisplay.style.color = "#fada5e";
    } else {
        resultDisplay.textContent = "You lose!";
        resultDisplay.style.color = "#860111";
    }
}

function playGame() { 
    if (elementClicked === true) {
        const computerChoice = getComputerChoice();
        displayComputerChoice(computerChoice);
        playRound(humanChoice, computerChoice);
        elementClicked = false; // Reset for the next round
    }
}

// Implementing it
getHumanChoice(); // Initialize event listeners
