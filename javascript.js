let playerScore = parseInt(0);
let computerScore = parseInt(0);
let tie = "Round Result: Tie";
let win = "Round Result: Player Win";
let lose = "Round Result: Player Lose";

function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3);
    if (computerChoice === 0) {
        return "rock";
    } else if (computerChoice === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

function playRound(playerSelection) {
    const computerSelection = getComputerChoice();
    console.log("Computer Selection: " + computerSelection);
    console.log("Player Selection: " + playerSelection);
    console.log("Computer Score: " + computerScore);
    console.log("Player Score: " + playerScore);
    if (playerSelection === computerSelection) {
        return tie;
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        playerScore++;
        return win;
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        playerScore++;
        return win;
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        playerScore++;
        return win;
    } else {
        computerScore++;
        return lose;
    }
}

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

rock.addEventListener("click", () => playRound("rock"));
paper.addEventListener("click", () => playRound("paper"));
scissors.addEventListener("click", () => playRound("scissors"));


/*
function game() {
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Rock, Paper, or Scissors?", "").toLowerCase();
        const computerSelection = getComputerChoice();
        console.log("Player Selection: " + playerSelection);
        console.log("Computer Selection: " + computerSelection);
        console.log(playRound(playerSelection, computerSelection));
        console.log("Your Score: " + playerScore);
        console.log("Computer Score: " + computerScore);
    }

    if (playerScore > computerScore) {
        console.log("Game Over: Player Wins");
    } else if (playerScore === computerScore) {
        console.log("Game Over: Draw");
    } else {
        console.log("Game Over: You're a Loser");
    }
}

game();
*/
