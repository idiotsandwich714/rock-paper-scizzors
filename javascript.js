// Paper beats Rock, Scissors beats Paper, Rock beats Scissors
// 1 beats 0, 2 beats 1, 0 beats 2

function getComputerChoice() {
    const computerChoice = Math.floor(Math.random() * 3);

    if (computerChoice === 0) {
        console.log("Computer Selection: Rock");
    } else if (computerChoice === 1) {
        console.log("Computer Selection: Paper");
    } else {
        console.log ("Computer Selection: Scissors");
    } 
}

getComputerChoice();

function getPlayerChoice() {
    let playerChoice = prompt("Rock, Paper, or Scissors?", "").toLowerCase();
    let playerSelection;

    if (playerChoice === "rock") {
        playerSelection = 0
    } else if (playerChoice === "paper") {
        playerSelection = 1
    } else if (playerChoice === "scissors") {
        playerSelection = 2
    }    

    console.log("Player Selection: " + playerSelection);
}

getPlayerChoice();
