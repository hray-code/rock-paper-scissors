//------------------------------------ V2: ROCK PAPER SCISSORS ------------------------------------- //

function getComputerChoice(){
    let randomNumber = Math.floor(Math.random() * 3); //--- Generate either 0, 1, or 2
    if(randomNumber === 0)
        return "rock";
    else if(randomNumber === 1)
        return "paper";
    else if(randomNumber === 2)
        return "scissors";
}

let computerChoice = getComputerChoice(); //--- Store result of generated choice


function getHumanChoice(){
    let humanInput = prompt("Enter rock, paper, or scissors."); //--- Store user's input
    let result = humanInput.toLowerCase();
    return result;
}

let humanChoice = getHumanChoice(); //--- Store result of from user input

//------------------------------------------------ Game -----------------------------------------------//

playRound(computerChoice, humanChoice); //--- Call and pass in computer choice and user choice to playGame function

function playRound(computerChoice, humanChoice){

    if(computerChoice === "rock" && humanChoice === "scissors"){
        computerScore++;
        console.log("Rock beats scissors, computer wins this round.")
        console.log("Score... Computer: " + computerScore + " User: " + humanScore);
    }
    else if(computerChoice === "paper" && humanChoice === "rock"){
        computerScore++;
        console.log("Paper beats rock, computer wins this round.")
        console.log("Score... Computer: " + computerScore + " User: " + humanScore);
    }
    else if(computerChoice === "scissors" && humanChoice === "paper"){
        computerScore++;
        console.log("Scissors beats paper, computer wins this round.")
        console.log("Score... Computer: " + computerScore + " User: " + humanScore);
    }
    else if(computerChoice === "scissors" && humanChoice === "rock"){
        humanScore++;
        console.log("Rock beats scissors, user wins this round.")
        console.log("Score... Computer: " + computerScore + " User: " + humanScore);
    }
    else if(computerChoice === "paper" && humanChoice === "scissors"){
        humanScore++;
        console.log("Scissors beats paper, user wins this round.")
        console.log("Score... Computer: " + computerScore + " User: " + humanScore);
    }
    else if(computerChoice === "rock" && humanChoice === "paper"){
        humanScore++;
        console.log("Paper beats rock, user wins this round.")
        console.log("Score... Computer: " + computerScore + " User: " + humanScore);
    }
    else{
        console.log("Tie.");
    }   
}   

function playGame(){

let computerScore = 0; 
let humanScore = 0; 
let scoreMessage = console.log("Score... Computer: " + computerScore + " User: " + humanScore);


    if(computerChoice === "rock" && humanChoice === "scissors"){
        computerScore++;
        console.log("Rock beats scissors, computer wins this round.")
        console.log(scoreMessage);
    }
    else if(computerChoice === "paper" && humanChoice === "rock"){
        computerScore++;
        console.log("Paper beats rock, computer wins this round.")
        console.log(scoreMessage);
    }
    else if(computerChoice === "scissors" && humanChoice === "paper"){
        computerScore++;
        console.log("Scissors beats paper, computer wins this round.")
        console.log(scoreMessage);

    else if(computerChoice === "scissors" && humanChoice === "rock"){
        humanScore++;
        console.log("Rock beats scissors, user wins this round.")
        console.log(scoreMessage);
    }
    else if(computerChoice === "paper" && humanChoice === "scissors"){
        humanScore++;
        console.log("Scissors beats paper, user wins this round.")
        console.log(scoreMessage);
    }
    else if(computerChoice === "rock" && humanChoice === "paper"){
        humanScore++;
        console.log("Paper beats rock, user wins this round.")
        console.log(scoreMessage);
    }
    else{
        console.log("Tie.");
    } 
}