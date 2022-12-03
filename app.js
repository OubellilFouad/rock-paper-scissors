let result = document.querySelector(".result");
let score = document.querySelector(".score");
let count = document.querySelector(".count");
let i = 0;
let j = 1;
function getComputerChoice(){
    let options = ["Rock","Paper","Scissors"];
    let comChoice = options[Math.floor(Math.random()*options.length)];
    return comChoice;
}
function playRound(playerChoice,computerChoice){
    if(playerChoice === "Rock" && computerChoice === "Scissors"){
        result.textContent = "Result : You win! Rock beats Scissors";
        j++;
    }else if(playerChoice === "Rock" && computerChoice === "Paper"){
        result.textContent = "Result : You lose :( Paper beats Rock";
    }else if(playerChoice === "Rock" && computerChoice === "Rock"){
        result.textContent = "Result : Tie! You have both picked Rock";
    }else if(playerChoice === "Scissors" && computerChoice === "Paper"){
        result.textContent = "Result : You win! Scissors beat Paper";
        j++;
    }else if(playerChoice === "Scissors" && computerChoice === "Rock"){
        result.textContent = "Result : You lose :( Rock beats Scissors";
    }else if(playerChoice === "Scissors" && computerChoice === "Scissors"){
        result.textContent = "Result : Tie! You have both picked Scissors";
    }else if(playerChoice === "Paper" && computerChoice === "Rock"){
        result.textContent = "Result : You win! Paper beats Rock";
        j++;
    }else if(playerChoice === "Paper" && computerChoice === "Scissors"){
        result.textContent = "Result : You lose :( Scissors beat Paper";
    }else{
        result.textContent = "Result : Tie! You have both picked Paper";
    }
}
function playGame(player,computer){
    playRound(player,computer);
}
const options = document.querySelectorAll(".option");
options.forEach(option => option.addEventListener("click",function(){
    let playerChoice = this.dataset.option;
    let comChoice  = getComputerChoice();
    playGame(playerChoice,comChoice);
    count.textContent = `Rounds played: ${i+=1}`;
    if(i === 5){
        if(j<3){
            score.textContent = `You lose! your score : ${j}`
        }else{
            score.textContent = `You win! your score : ${j}`
        }
    }
}))