function getComputerChoice(){
    let options = ["Rock","Paper","Scissors"];
    let comChoice = options[Math.floor(Math.random()*options.length)];
    return comChoice;
}
function playRound(playerChoice,computerChoice){
    if(playerChoice === "Rock" && computerChoice === "Scissors"){
        console.log("You win! Rock beats Scissors");
    }else if(playerChoice === "Rock" && computerChoice === "Paper"){
        console.log("You lose :( Paper beats Rock");
    }else if(playerChoice === "Rock" && computerChoice === "Rock"){
        console.log("Tie! You have both picked Rock");
    }else if(playerChoice === "Scissors" && computerChoice === "Paper"){
        console.log("You win! Scissors beat Paper");
    }else if(playerChoice === "Scissors" && computerChoice === "Rock"){
        console.log("You lose :( Rock beats Scissors");
    }else if(playerChoice === "Scissors" && computerChoice === "Scissors"){
        console.log("Tie! You have both picked Scissors");
    }else if(playerChoice === "Paper" && computerChoice === "Rock"){
        console.log("You win! Paper beats Rock");
    }else if(playerChoice === "Paper" && computerChoice === "Scissors"){
        console.log("You lose :( Scissors beat Paper");
    }else{
        console.log("Tie! You have both picked Paper");
    }
}
function playGame(player,computer){
    playRound(player,computer);
}
for(let i = 0;i<5;i++){
    let playerChoice = prompt("Choose between Rock,Paper and Scissors");
    let computerChoice = getComputerChoice();
    console.log(computerChoice,playerChoice);
    playGame(playerChoice,computerChoice);
}