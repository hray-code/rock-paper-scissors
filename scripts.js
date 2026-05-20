//------------------------------------ V1 : ROCK PAPER SCISSORS ------------------------------------- //

function getComputerChoice(){
    let randomNumber = Math.floor(Math.random() * 3); //--- Generate either 0, 1, or 2
    if(randomNumber === 0)
        return "rock";
    else if(randomNumber === 1)
        return "paper";
    else if(randomNumber === 2)
        return "scissors";
}

let compChoice = getComputerChoice(); //--- Store result of generated choice


function getHumanChoice(){
    let userInput = prompt("Enter rock, paper, or scissors."); //--- Store user's input
    return userInput;
}

let userChoice = getHumanChoice(); //--- Store result of from user input

//------------------------------------------------ Game -----------------------------------------------//

playGame(compChoice, userChoice); //--- Call and pass in computer choice and user choice to playGame function

function playGame(compChoice, userChoice){

    let computer = compChoice; //---I think this is needed?
    let user = userChoice; //---I think this is needed?
    let compScore = 0; //---Not needed in this version
    let userScore = 0; //---Not needed in this version

    if(computer === "rock" && user === "scissors"){
        compScore++;
        console.log("Rock beats scissors, computer wins this round.")
        console.log(computer, user);
    }
    else if(computer === "paper" && user === "rock"){
        compScore++;
        console.log("Paper beats rock, computer wins this round.")
        console.log(computer, user);
    }
    else if(computer === "scissors" && user === "paper"){
        compScore++;
        console.log("Scissors beats paper, computer wins this round.")
        console.log(computer, user);
    }
    else if(computer === "scissors" && user === "rock"){
        userScore++;
        console.log("Rock beats scissors, user wins this round.")
        console.log(computer, user);
    }
    else if(computer === "paper" && user === "scissors"){
        userScore++;
        console.log("Scissors beats paper, user wins this round.")
        console.log(computer, user);
    }
    else if(computer === "rock" && user === "paper"){
        userScore++;
        console.log("Paper beats rock, user wins this round.")
        console.log(computer, user);
    }
    else{
        console.log("Tie.");
    }
}   