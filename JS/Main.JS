//To keep track of the scores of each round and play a game.
let humanScore = 0
let computerScore = 0

//Produces random choice from the computer.
function getComputerChoice() {
    let choices = ['ROCK', 'PAPER', 'SCISSOR'];
    let choosing = Math.floor((Math.random() * choices.length));
    let choice = choices[choosing];
    return choice;
}

//Creates a prompt so the user can input their answer of rock, paper, or scissor.
function getHumanChoice(){
    let choosing = window.prompt("Choose Rock, Paper, or Scissor.");
    let choice = choosing.toUpperCase();
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

function playGame(){
    while (humanScore < 5 && computerScore < 5) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }
    if (humanScore === 5) {
        console.log("You won the game!");
    }
    if (computerScore === 5) {
        console.log("You lost the game. Try again!");
    }
}

playGame()