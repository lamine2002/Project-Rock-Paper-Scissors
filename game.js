

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
    const result = document.createElement('div');
    const container = document.querySelector('.container');
    container.appendChild(result);
    const score = document.createElement('div');
    container.appendChild(score);
    const finalResult = document.createElement('div');
    container.appendChild(finalResult);
    
    reset.textContent =  'reset';
    let playerPoint = 0;
    let computerPoint = 0;
    let cpt = 0;
  
    function play(playerChoice) {
      const computerChoice = getComputerChoice();
      const gameResult = rockPaperScissors(playerChoice, computerChoice);
  
      if (gameResult.includes('You win')) {
        playerPoint++;
      }
      if (gameResult.includes('Lose')) {
        computerPoint++;
      }
      
      result.textContent = gameResult;
      cpt++;
      score.textContent = `Player ${playerPoint} - ${computerPoint} Computer`;
  
      if (cpt === 5) {
        // Vérifier le gagnant ou effectuer d'autres actions lorsque cpt est égal à 5
        if (playerPoint > computerPoint) {
          finalResult.textContent = `You win (${playerPoint}-${computerPoint})`;
          finalResult.style.color = 'green';
        } else if (playerPoint < computerPoint) {
          finalResult.textContent = `You Lose (${playerPoint}-${computerPoint})`;
          finalResult.style.color = 'red';
        } else {
          finalResult.textContent = `No one win! (${playerPoint}-${computerPoint})`;
        }
        
        // Masquer les boutons
        document.querySelectorAll('.choice').forEach(button => {
          button.style.display = 'none';
        });
      }
    }
  
    document.querySelectorAll('.choice').forEach(button => {
      button.addEventListener('click', () => {
        play(button.id);
      });
    });
    reset.addEventListener('click', () =>{
        location.reload();
    });
}
  

game();
