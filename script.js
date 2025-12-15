let playerScore = 0;
let compScore = 0;
let round = 0;
let gameOver = false;

function getComputerChoice () {
    const randNum = Math.floor(Math.random() * 3);
    switch(randNum) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
    
}

function playRound (playerChoice) {
    const compChoice = getComputerChoice();
    const outcome = findRoundWinner(playerChoice, compChoice);
    if (outcome === "player") {
        playerScore++;
    }
    else if (outcome === "computer") {
        compScore++;
    }

    updateInfo(playerChoice, compChoice, outcome);

    round++;
    checkWinner();
}

function updateInfo(playerChoice, compChoice, outcome) {
    const divs = document.querySelectorAll("div");
    divs[0].textContent = `Round ${round + 1}`;
    divs[1].textContent = `Player chose ${playerChoice}. ~~~ Computer chose ${compChoice}.`;
    if (outcome === "tie") {
        divs[2].textContent = `It's a tie!`
    }
    else {
        divs[2].textContent = `${capitalizeFirstLetter(outcome)} wins the round!`
    }
    divs[3].textContent = `Scores -  Player: ${playerScore} points ~~~ Computer: ${compScore} points`
}

function capitalizeFirstLetter (str) {
    return str.replace(str.at(0), str.at(0).toUpperCase())
}

function findRoundWinner (playerChoice, compChoice) {
    //compareList has the results for playerChoice vs compChoice at the index of rpsList
    //e.g. if player chooses rock, rpsList[0] will be a tie because it is also rock, but 
    //  rpsList[1] will be a loss because it is paper
    //returns "player" if player wins, "computer" if computer wins, "tie" if tie
    const rpsList = ["rock", "paper", "scissors"];
    const compChoiceIndex = rpsList.indexOf(compChoice);
    if (playerChoice === "rock") {
        const compareList = ["tie", "computer", "player"];
        return compareList[compChoiceIndex];
    }
    else if (playerChoice === "paper") {
        const compareList = ["player", "tie", "computer"];
        return compareList[compChoiceIndex];
    }
    else if (playerChoice === "scissors") {
        const compareList = ["computer", "player", "tie"];
        return compareList[compChoiceIndex];
    }
}

function checkWinner() {
    if (playerScore === 5) {
        console.log("Player wins!");
        gameOver = true;
    }
    else if (compScore === 5) {
        console.log("Computer wins!");
        gameOver = true;
    }
}

const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");

rock.addEventListener("click", () => {
    if (gameOver === false) {
        playRound("rock");
    }
})
paper.addEventListener("click", () => {
    if (gameOver === false) {
        playRound("paper");
    }
})
scissors.addEventListener("click", () => {
    if (gameOver === false) {
        playRound("scissors");
    }
})



