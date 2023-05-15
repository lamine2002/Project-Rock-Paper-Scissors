function getComputerChoice(){
    var aleatoire = Math.floor(Math.random() * 3) + 1;
    var computerChoise = '';
    if (aleatoire === 1) {
        computerChoise = 'Rock';
    }else if (aleatoire === 2) {
        computerChoise = 'Paper';
    }else {
        computerChoise = 'Scissors';
    }
    return computerChoise;
}

function rockPaperScissors(playerSelectionet, computerSelection){
    playerSelectionet = playerSelectionet.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    if (playerSelectionet === 'rock') {
        if (computerSelection === 'paper'){
            return "You Lose! paper beats rock";
        }else if (computerSelection === 'scissors') {
            return "You win! rock beats scissors";
        }else{
            return "No one win!"
        }
    }
    if (playerSelectionet === 'paper') {
        if (computerSelection === 'scissors'){
            return "You Lose! scissors beats paper";
        }else if (computerSelection === 'rock') {
            return "You win! paper beats rock";
        }else{
            return "No one win!"
        }
    }
    if (playerSelectionet === 'scissors') {
        if (computerSelection === 'rock'){
            return "You Lose! rock beats scissors";
        }else if (computerSelection === 'paper') {
            return "You win! scissors beats paper";
        }else{
            return "No one win!"
        }
    }
}
function game() {
    let playerPoint = 0;
    let computerPoint = 0;
    let playerChoice = '';
    let computerChoise = '';
    let game = '';
    for (let index = 0; index < 5; index++) {
        playerChoice = prompt('Choose inter (rock, paper, scissors) : ');
        computerChoise = getComputerChoice();
        game = rockPaperScissors(playerChoice, computerChoise);
        console.log(game);
        if (game.includes('You win')){
            playerPoint++;
        }
        if (game.includes('Lose')){
            computerPoint++;
        }
    }
    if (playerPoint > computerPoint) {
        return `You win (${playerPoint}-${computerPoint})`;
    }else if (playerPoint < computerPoint){
        return `You Lose (${playerPoint}-${computerPoint})`;
    }else{
        return `No one win! (${playerPoint}-${computerPoint})`;
    }
}
console.log(game());