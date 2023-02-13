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

const playerWeapon = document.querySelector("#playerWeapon");
const computerWeapon = document.querySelector("#computerWeapon");
const playerScoreBoard = document.querySelector("#playerScoreBoard");
const computerScoreBoard = document.querySelector("#computerScoreBoard");
const roundResult = document.querySelector("#roundResult");
const gameResult = document.querySelector("#gameResult");

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

rock.addEventListener("click", () => playRound("rock"));
paper.addEventListener("click", () => playRound("paper"));
scissors.addEventListener("click", () => playRound("scissors"));


function playRound(playerSelection) {
    const computerSelection = getComputerChoice();

    playerWeapon.textContent = "Player Selection: " + playerSelection;
    computerWeapon.textContent = "Computer Selection: " + computerSelection;
    
    
    if (playerSelection === computerSelection) {
        roundResult.textContent = tie;
        playerScoreBoard.textContent = "Player Score: " + playerScore;
        computerScoreBoard.textContent = "Computer Score: " + computerScore;
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        playerScore++;
        roundResult.textContent = win;
        playerScoreBoard.textContent = "Player Score: " + playerScore;
        computerScoreBoard.textContent = "Computer Score: " + computerScore;
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        playerScore++;
        roundResult.textContent = win;
        playerScoreBoard.textContent = "Player Score: " + playerScore;
        computerScoreBoard.textContent = "Computer Score: " + computerScore;
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        playerScore++;
        roundResult.textContent = win;
        playerScoreBoard.textContent = "Player Score: " + playerScore;
        computerScoreBoard.textContent = "Computer Score: " + computerScore;
    } else {
        computerScore++;
        roundResult.textContent = lose;
        playerScoreBoard.textContent = "Player Score: " + playerScore;
        computerScoreBoard.textContent = "Computer Score: " + computerScore;
    }

    if (playerScore === 5) {
        gameResult.textContent = "Game Over: Player Wins the Game!"
        document.getElementById("rock").disabled = true;
        document.getElementById("paper").disabled = true;
        document.getElementById("scissors").disabled = true;
        const reset = document.createElement("button");
        reset.textContent = "Play Again";
        document.body.appendChild(reset);
        reset.addEventListener("click", () => window.location.reload());
    } else if (computerScore === 5) {
        gameResult.textContent = "Game Over: Player Wins the Game!"
        document.getElementById("rock").disabled = true;
        document.getElementById("paper").disabled = true;
        document.getElementById("scissors").disabled = true;
        const reset = document.createElement("button");
        reset.textContent = "Play Again";
        document.body.appendChild(reset);
        reset.addEventListener("click", () => window.location.reload());
    }
}







