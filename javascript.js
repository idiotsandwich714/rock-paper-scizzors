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

const roundResult = document.querySelector("#roundResult");
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

rock.addEventListener("click", () => playRound("rock"));
paper.addEventListener("click", () => playRound("paper"));
scissors.addEventListener("click", () => playRound("scissors"));


function playRound(playerSelection) {
    const computerSelection = getComputerChoice();

    if (playerSelection === "rock") {
        document.getElementById("turtleSelectionImage").src="./images/rock.jpg";
    } else if (playerSelection === "paper") {
        document.getElementById("turtleSelectionImage").src="./images/paper.jpg";
    } else {
        document.getElementById("turtleSelectionImage").src="./images/scissors.jpg";
    }

    if (computerSelection === "rock") {
        document.getElementById("hareSelectionImage").src="./images/rock.jpg";
    } else if (computerSelection === "paper") {
        document.getElementById("hareSelectionImage").src="./images/paper.jpg";
    } else {
        document.getElementById("hareSelectionImage").src="./images/scissors.jpg"
    }
        
    if (playerSelection === computerSelection) {
        roundResult.textContent = tie;
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        playerScore++;
        roundResult.textContent = win;
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        playerScore++;
        roundResult.textContent = win;
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        playerScore++;
        roundResult.textContent = win;
    } else {
        computerScore++;
        roundResult.textContent = lose;
    }

    if (playerScore === 1) {
        document.getElementById("turtleroadone").src="./images/mexicanturtle.jpg";
    } else if (playerScore === 2) {
        document.getElementById("turtleroadone").src="./images/road.png";
        document.getElementById("turtleroadtwo").src="./images/mexicanturtle.jpg";
    } else if (playerScore === 3) {
        document.getElementById("turtleroadtwo").src="./images/road.png";
        document.getElementById("turtleroadthree").src="./images/mexicanturtle.jpg";
    } else if (playerScore === 4) {
        document.getElementById("turtleroadthree").src="./images/road.png";
        document.getElementById("turtleroadfour").src="./images/mexicanturtle.jpg";
    } else if (playerScore === 5) {
        document.getElementById("turtleroadfour").src="./images/road.png";
        document.getElementById("turtleroadfive").src="./images/mexicanturtle.jpg";
    }

    if (computerScore === 1) {
        document.getElementById("hareroadone").src="./images/mexicanrabbit.jpg";
    } else if (computerScore === 2) {
        document.getElementById("hareroadone").src="./images/road.png";
        document.getElementById("hareroadtwo").src="./images/mexicanrabbit.jpg";
    } else if (computerScore === 3) {
        document.getElementById("hareroadtwo").src="./images/road.png";
        document.getElementById("hareroadthree").src="./images/mexicanrabbit.jpg";
    } else if (computerScore === 4) {
        document.getElementById("hareroadthree").src="./images/road.png";
        document.getElementById("hareroadfour").src="./images/mexicanrabbit.jpg";
    } else if (computerScore === 5) {
        document.getElementById("hareroadfour").src="./images/road.png";
        document.getElementById("hareroadfive").src="./images/mexicanrabbit.jpg";
    }

    if (playerScore === 5) {
        roundResult.textContent = "Game Over: Player Wins the Game!"
        document.getElementById("rock").disabled = true;
        document.getElementById("paper").disabled = true;
        document.getElementById("scissors").disabled = true;
        const reset = document.createElement("button");
        reset.textContent = "Play Again";
        document.getElementById("roundResult").appendChild(reset);
        reset.addEventListener("click", () => window.location.reload());
    } else if (computerScore === 5) {
        roundResult.textContent = "Game Over: Player Wins the Game!"
        document.getElementById("rock").disabled = true;
        document.getElementById("paper").disabled = true;
        document.getElementById("scissors").disabled = true;
        const reset = document.createElement("button");
        reset.textContent = "Play Again";
        document.getElementById("roundResult").appendChild(reset);
        reset.addEventListener("click", () => window.location.reload());
    }
}







