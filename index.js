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

let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() === computerSelection.toLowerCase()){
        return "Tie";
    } else if (playerSelection.toLowerCase() === "rock" && computerSelection.toLowerCase() === "paper") {
        computerScore += 1;
        return "You Lose! Paper beats Rock";
    } else if (playerSelection.toLowerCase() === "rock" && computerSelection.toLowerCase() === "scissors") {
        playerScore += 1;
        return "You Win! Rock beats Scissors";
    } else if (playerSelection.toLowerCase() === "paper" && computerSelection.toLowerCase() === "rock") {
        playerScore += 1;
        return "You Win! Paper beats Rock";
    } else if (playerSelection.toLowerCase() === "paper" && computerSelection.toLowerCase() === "scissors") {
        computerScore += 1;
        return "You Lose! Scissors beats Paper";
    } else if (playerSelection.toLowerCase() === "scissors" && computerSelection.toLowerCase() === "rock") {
        computerScore += 1;
        return "You Lose! Rock beats Scissors";
    } else if (playerSelection.toLowerCase() === "scissors" && computerSelection.toLowerCase() === "paper") {
        playerScore += 1;
        return "You Win! Scissors beats Paper";
    }
}


function playGame(round) {
    for(let i=0; i<round; i++){
        const computerSelection = getComputerChoice();
        const playerSelection = prompt("Select a Weapon! (Rock, Paper or Scissors)");

        console.log("Player: " + playerSelection + " Computer: " + computerSelection);
        console.log(playRound(playerSelection, computerSelection));
        console.log("Player: " + playerScore + " Computer: " + computerScore);
    }

    if (playerScore > computerScore) {
        return "YOU WON THE GAME!";
    } else if (playerScore < computerScore) {
        return "COMPUTER WIN!!";
    } else {
        return "TIE!!";
    }
}

console.log(playGame(5));



