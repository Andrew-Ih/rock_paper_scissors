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

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        const computerSelection = getComputerChoice();
        playRound(button.id, computerSelection);
        console.log("Player: " + button.id + " Computer: " + computerSelection);
        console.log("Player: " + playerScore + " Computer: " + computerScore);

        pScore.textContent = "Player Score: " + playerScore;

        cScore.textContent = "Computer Score: " + computerScore;
      });
});


        


function playGame() {
    // for(let i=0; i<5; i++){
    //     const computerSelection = getComputerChoice();
    //     const playerSelection = prompt("Select a Weapon! (Rock, Paper or Scissors)");

    //     console.log("Player: " + playerSelection + " Computer: " + computerSelection);
    //     console.log(playRound(playerSelection, computerSelection));
    //     console.log("Player: " + playerScore + " Computer: " + computerScore);
    // }

    // if (playerScore > computerScore) {
    //     return "YOU WON THE GAME!";
    // } else if (playerScore < computerScore) {
    //     return "COMPUTER WIN!!";
    // } else {
    //     return "TIE!!";
    // }
}

console.log(playGame());



