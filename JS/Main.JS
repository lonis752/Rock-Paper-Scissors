//To keep track of the scores of each round and play a game.
let humanScore = 0
let computerScore = 0

const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissor = document.getElementById("scissor");
const liveScore = document.getElementById("score");

//Produces random choice from the computer.
function getComputerChoice() {
    let choices = ['ROCK', 'PAPER', 'SCISSOR'];
    let choosing = Math.floor((Math.random() * choices.length));
    let choice = choices[choosing];
    return choice;
}

//This block is code for the rules of the game and for the results to log and score.
function playRound(humanChoice, computerChoice){
    if (humanChoice === computerChoice){
        console.log("It's a tie.");
    } else if (humanChoice === "PAPER" && computerChoice === "ROCK" || 
        humanChoice === "ROCK" && computerChoice === "SCISSOR" || 
        humanChoice === "SCISSOR" && computerChoice === "PAPER") {
        humanScore++;
        console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
    } else if (humanChoice === "PAPER" && computerChoice === "SCISSOR" || 
        humanChoice === "ROCK" && computerChoice === "PAPER" || 
        humanChoice === "SCISSOR" && computerChoice === "ROCK"){
        computerScore++;
        console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
    } else {
        console.log("Invalid answer. Please try again!");
    }
}

rock.addEventListener("click", (evt) => {
    const computerSelection = getComputerChoice();
    playRound("ROCK", computerSelection);
    liveScore.textContent = `Your Score: ${humanScore} | Opponent's Score: ${computerScore}`;
    if (humanScore === 5) {
        alert("You won! Play again?");
        window.location.reload();
    }
    if (computerScore === 5) {
        alert("You lost the game. Try again!");
        window.location.reload();
    }
});
paper.addEventListener("click", (evt) => {
    const computerSelection = getComputerChoice();
    liveScore.textContent = `Your Score: ${humanScore} | Opponent's Score: ${computerScore}`;
    playRound("PAPER", computerSelection);
    if (humanScore === 5) {
        alert("You won! Play again?");
        window.location.reload();
    }
    if (computerScore === 5) {
        alert("You lost the game. Try again!");
        window.location.reload();
    }
});
scissor.addEventListener("click", (evt) => {
    const computerSelection = getComputerChoice();
    liveScore.textContent = `Your Score: ${humanScore} | Opponent's Score: ${computerScore}`;
    playRound("SCISSOR", computerSelection);
    if (humanScore === 5) {
        alert("You won! Play again?");
        window.location.reload();
    }
    if (computerScore === 5) {
        alert("You lost the game. Try again!");
        window.location.reload();
    }
});