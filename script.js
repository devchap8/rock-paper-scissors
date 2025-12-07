function getComputerChoice () {
    const randNum = Math.floor(Math.random() * 3);
    switch(randNum) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scizzors";
    }
    
}

function getPlayerChoice () {
    const playerChoice = prompt("Rock, paper, or scizzors?").trim().toLowerCase();
    if (playerChoice !== ("rock" || "paper" || "scizzors"))
}

