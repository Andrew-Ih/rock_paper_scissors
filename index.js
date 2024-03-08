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


const buttons = document.querySelectorAll('button');

const pScore = document.querySelector('.pScore');
pScore.textContent = "Player Score: " + playerScore;

const cScore = document.querySelector('.cScore');
cScore.textContent = "Computer Score: " + computerScore;

const comment = document.querySelector('.comment');
comment.textContent = "GAME STILL ON!!";

function playGame() {
    if (playerScore > computerScore && playerScore >= 5) {
        comment.textContent = "YOU WON THE GAME!!!";
        return "YOU WON THE GAME!";
    } else if (playerScore < computerScore && computerScore >= 5) {
        comment.textContent = "COMPUTER WINS!!";
        return "COMPUTER WINS!!";
    } else {
        return "GAME STILL ON";
    }
}

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        const computerSelection = getComputerChoice();
        
        playRound(button.id, computerSelection);
        console.log("Player: " + button.id + " Computer: " + computerSelection);
        console.log("Player: " + playerScore + " Computer: " + computerScore);

        pScore.textContent = "Player Score: " + playerScore;

        cScore.textContent = "Computer Score: " + computerScore;

        console.log(playGame());
      });
});








