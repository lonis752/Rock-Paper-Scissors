//To keep track of the scores of each round and play a game.
let humanScore = 0
let computerScore = 0
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

//Produces random choice from the computer.
function getComputerChoice() {
    let choices = ['ROCK', 'PAPER', 'SCISSOR'];
    let choosing = Math.floor((Math.random() * choices.length));
    let choice = choices[choosing];
    return (choice);
}

//Creates a prompt so the user can input their answer of rock, paper, or scissor.
function getHumanChoice(){
    let choosing = window.prompt("Choose Rock, Paper, or Scissor.");
        return (choosing.toUpperCase());
}

//This block is code for the rules of the game and for the results to log and score.
function playRound(humanChoice, computerChoice){
    if (humanSelection === computerSelection){
        console.log("It's a tie.");
    }else if (humanSelection === "PAPER" && computerSelection === "ROCK"){
        humanScore++;
        console.log("You win! Paper beats rock.");
        return (humanScore = humanScore + 1)
    } else if (humanSelection === "PAPER" && computerSelection === "SCISSOR"){
        computerScore++;
        console.log("You lose! Scissor beats paper.");
    } else if (humanSelection === "ROCK" && computerSelection === "PAPER"){
        computerScore++;
        console.log("You lose! Paper beats rock.");
    } else if (humanSelection === "ROCK" && computerSelection === "SCISSOR"){
        humanScore++;
        console.log("You win! Rock beats scissor.");
    } else if (humanSelection === "SCISSOR" && computerSelection === "ROCK"){
        computerScore++;
        console.log("You lose! Rock beats scissor.");
    } else if (humanSelection === "SCISSOR" && computerSelection === "PAPER"){
        humanScore++;
        console.log("You win! Scissor beats paper.");
    } else {
        console.log("Invalid answer. Please try again!");
    }
}

function playGame(){
    while (humanScore < 5 && computerScore < 5) {
        getComputerChoice();
        getHumanChoice();
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