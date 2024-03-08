function getComputerChoice() {
    let minNum = 1;
    let maxNum = 3;

    let randomNum = Math.floor(Math.random() * (maxNum - minNum + 1) + minNum);

    if (randomNum == 1){
        return "rock";
    } else if (randomNum == 2){
        return "paper";
    } else if (randomNum == 3){
        return "scissors";
    }
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() === computerSelection.toLowerCase()){
        return "Tie";
    } else if (playerSelection.toLowerCase() === "rock" && computerSelection.toLowerCase() === "paper") {
        return "You Lose! Paper beats Rock";
    } else if (playerSelection.toLowerCase() === "rock" && computerSelection.toLowerCase() === "scissors") {
        return "You Win! Rock beats Scissors";
    } else if (playerSelection.toLowerCase() === "paper" && computerSelection.toLowerCase() === "rock") {
        return "You Win! Paper beats Rock";
    } else if (playerSelection.toLowerCase() === "paper" && computerSelection.toLowerCase() === "scissors") {
        return "You Lose! Scissors beats Paper";
    } else if (playerSelection.toLowerCase() === "scissors" && computerSelection.toLowerCase() === "rock") {
        return "You Lose! Rock beats Scissors";
    } else if (playerSelection.toLowerCase() === "scissors" && computerSelection.toLowerCase() === "paper") {
        return "You Win! Scissors beats Paper";
    }
}


const computerSelection = getComputerChoice();
const playerSelection = prompt("Add");

console.log(computerSelection);

console.log(playRound(playerSelection, computerSelection));



