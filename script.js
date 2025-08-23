let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorepara = document.querySelector("#user-score");
const compScorepara = document.querySelector("#comp-score");



const genCompChoice = () => {
    //rock , paper, scissors
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
}

//Draw Game
const drawGame = () => {
   
    msg.innerText = "Game Was Draw : Play  Again!";
    msg.style.backgroundColor = "#808080";
}

const showWinner = (userWin , userChoice , compChoice) => {
    if (userWin){
        userScore++;
        userScorepara.innerText = userScore;
        msg.innerText = `Congratulations ! You Are Win Your ${userChoice} beats ${compChoice}`;
         msg.style.backgroundColor = "green";
    }else{
        compScore++;
        compScorepara.innerText = compScore;
        msg.innerText = `You Lose ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}


const playGame =(userChoice) =>{
    console.log("user Choice is ", userChoice); //user choice was come in this function.

    //Generate Computer Chioce
    const compChoice = genCompChoice();
    console.log("comp choice is ", compChoice);

    if(userChoice === compChoice){
        drawGame();
    }else{
        let userWin = true;
        if(userChoice === "rock"){
            //paper,scissors
            userWin = compChoice === "paper" ? false : true;//turnary operater

        }else if(userChoice === "paper"){
            //rock, scissor
            userWin = compChoice === "scissors" ? false : true;
        }else{
            userWin = compChoice === "rock" ? false  : true;
        }

        showWinner(userWin , userChoice , compChoice);
    }



}

choices.forEach((choice)=>{
choice.addEventListener("click", () =>{
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
})
})