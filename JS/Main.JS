//Produces random choice from the computer.
function getComputerChoice() {
    let choices = ['ROCK', 'PAPER', 'SCISSOR'];
    let choosing = Math.floor((Math.random() * choices.length));
    let choice = choices[choosing];
    return (choice);
}

console.log(getComputerChoice())

//Creates a prompt so the user can input their answer of rock, paper, or scissor.
function getHumanChoice(){
    let choosing = window.prompt("Choose Rock, Paper, or Scissor.").toUpperCase();
        if (choosing == "ROCK" || choosing == "PAPER" || choosing == "SCISSOR"){
            choosing = choosing.toUpperCase();
            return choosing;
        }else{
            choosing = prompt("Not a valid answer. Please try again! Choose Rock, Paper, or Scissor.");
            choosing = choosing.toUpperCase();
            return choosing;
        }
}

console.log(getHumanChoice())

let humanScore = 0
let computerScore = 0

//function playground(humanChoice, computerChoice){

//}

//const humanSelection = getHumanChoice();
//const computerSelection = getComputerChoice();

//playground(humanSelection, computerSelection)