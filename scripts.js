//---------------------------------------- ROCK PAPER SCISSORS --------------------------------------------//

//get computer choice
function getComputerChoice(){
    let randomNumber = Math.floor(Math.random() * 3);
    let result = "";
        if(randomNumber === 0)
            result = "rock";
        else if(randomNumber === 1)
            result = "paper";
        else if(randomNumber === 2)
            result = "scissors";
        return result;
 }

 //get human choice
function getHumanChoice(){
    let humanInput = prompt("Enter rock, paper, or scissors.");
    let result = humanInput.toLowerCase();
    return result;
}

//store human and computer choices
let computerChoice = getComputerChoice();
let humanChoice = getHumanChoice();

//keep track of how many rounds have been played
let roundsPlayed = 5;

//keep score
let computerScore = 0;
let humanScore = 0;

//start game and pass in computer and human choices
playGame(computerChoice, humanChoice);

function playGame(computerChoice, humanChoice){

    //let gameMessage = `Computer Score: ${computerScore} | User Score: ${humanScore}`;

        if(computerChoice === "rock" && humanChoice === "scissors"){
            computerScore++;
            roundsPlayed--;
            console.log("Rock beats scissors, computer wins this round.");
            console.log(`Computer pick: ${computerChoice} | User choice: ${humanChoice}`);
        }
        else if(computerChoice === "paper" && humanChoice === "rock"){
            computerScore++;
            roundsPlayed--;
            console.log("Paper beats rock, computer wins this round.");
            console.log(`Computer pick: ${computerChoice} | User choice: ${humanChoice}`)
        }
        else if(computerChoice === "scissors" && humanChoice === "paper"){
            computerScore++;
            roundsPlayed--;
            console.log("Scissors beats paper, computer wins this round.");
            console.log(`Computer pick: ${computerChoice} | User choice: ${humanChoice}`)
        }
        else if(computerChoice === "scissors" && humanChoice === "rock"){
            humanScore++;
            roundsPlayed--;
            console.log("Rock beats scissors, user wins this round.");
            console.log(`Computer pick: ${computerChoice} | User choice: ${humanChoice}`)
        }
        else if(computerChoice === "paper" && humanChoice === "scissors"){
            humanScore++;
            roundsPlayed--;
            console.log("Scissors beats paper, user wins this round.");
            console.log(`Computer pick: ${computerChoice} | User choice: ${humanChoice}`)
        }
        else if(computerChoice === "rock" && humanChoice === "paper"){
            humanScore++;
            roundsPlayed--;
            console.log("Paper beats rock, user wins this round.");
            console.log(`Computer pick: ${computerChoice} | User choice: ${humanChoice}`)
        }
        else{
            console.log("Tie.");
            roundsPlayed--;
            console.log(`Computer pick: ${computerChoice} | User choice: ${humanChoice}`)
        }
        
        if(roundsPlayed === 0){
            if(computerScore > humanScore){
                console.log("Computer Wins!");
            }else if(humanScore > computerScore){
                console.log("User Wins!");
            }else if(computerScore === humanScore){
                console.log("No winner.");
            }
        }

        if(roundsPlayed < 5 && roundsPlayed > 0){ //loop through 5 times
            let getNewComputerChoice = getComputerChoice(); //get new choice
            let getNewHumanChoice = getHumanChoice(); //get new choice
            playGame(getNewComputerChoice, getNewHumanChoice); //play again with new choices
        }
}