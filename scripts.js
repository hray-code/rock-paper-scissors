//------------------------------------ V2: ROCK PAPER SCISSORS ------------------------------------- //

function getComputerChoice(){
    let randomNumber = Math.floor(Math.random() * 3);
        if(randomNumber === 0)
            return "rock";
        else if(randomNumber === 1)
            return "paper";
        else if(randomNumber === 2)
            return "scissors";
    }

function getHumanChoice(){
    let humanInput = prompt("Enter rock, paper, or scissors.");
    let result = humanInput.toLowerCase();
    return result;
}

for(let i = 0; i < 5; i++){
    startGame();
}

function startGame(){
    let computerChoice = getComputerChoice();
    let humanChoice = getHumanChoice();
    playGame(computerChoice, humanChoice);
}

function playGame(computerChoice, humanChoice){

    let computerScore = 0; 
    let humanScore = 0; 

        if(computerChoice === "rock" && humanChoice === "scissors"){
            computerScore++;
            console.log("Rock beats scissors, computer wins this round.")
        }
        else if(computerChoice === "paper" && humanChoice === "rock"){
            computerScore++;
            console.log("Paper beats rock, computer wins this round.")
        }
        else if(computerChoice === "scissors" && humanChoice === "paper"){
            computerScore++;
            console.log("Scissors beats paper, computer wins this round.")
        }
        else if(computerChoice === "scissors" && humanChoice === "rock"){
            humanScore++;
            console.log("Rock beats scissors, user wins this round.")
        }
        else if(computerChoice === "paper" && humanChoice === "scissors"){
            humanScore++;
            console.log("Scissors beats paper, user wins this round.")
        }
        else if(computerChoice === "rock" && humanChoice === "paper"){
            humanScore++;
            console.log("Paper beats rock, user wins this round.")
        }
        else{
            console.log("Tie.");
        } 
}