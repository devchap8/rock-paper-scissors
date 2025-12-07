let playerScore = 0;
let compScore = 0;

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

function getPlayerChoice () {
    const playerChoice = prompt("Rock, paper, or scissors?").trim().toLowerCase();
    if (playerChoice !== "rock" && playerChoice !== "paper" && playerChoice !== "scissors") {
        return "rock";
    }
    else {
        return playerChoice;
    }
}

function playRound () {
    const compChoice = getComputerChoice();
    const playerChoice = getPlayerChoice();
    const outcome = findRoundWinner(playerChoice, compChoice);
    if (outcome === "player") {
        playerScore++;
    }
    else if (outcome === "computer") {
        compScore++;
    }
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

playRound();