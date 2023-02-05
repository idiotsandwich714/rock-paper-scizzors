const computerChoice = Math.floor(Math.random() * 3);

function getComputerChoice() {
    if (computerChoice === 0) {
        return "rock";
    } else if (computerChoice === 1) {
        return "paper";
    } else {
        return "scissors";
    }
    
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "tie game";
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        return "you won";
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        return "you won";
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        return "you won";
    } else {
        return "loser";
    }
}

const playerSelection = "paper";
const computerSelection = getComputerChoice();

console.log("Player : " + playerSelection);
console.log("Computer : " + computerSelection);

console.log(playRound(playerSelection, computerSelection));