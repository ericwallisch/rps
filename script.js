function computerPlay() {
    const options = ['Rock', 'Paper', 'Scissors'];
    const random = Math.floor(Math.random() * options.length);
    return options[random];
}

function checkScore() {
    if (playerScore >=5) {
        //hide buttons, show reset, declare winner
        document.getElementById('Restart').style.display = 'inline';
        document.getElementById('Rock').style.display = 'none';
        document.getElementById('Paper').style.display = 'none';
        document.getElementById('Scissors').style.display = 'none';
        result.textContent = "You won the game!";
    }
    if (computerScore >= 5) {
        document.getElementById('Restart').style.display = 'inline';
        document.getElementById('Rock').style.display = 'none';
        document.getElementById('Paper').style.display = 'none';
        document.getElementById('Scissors').style.display = 'none';
        result.textContent = "You lost the game!";
    }
}

function playRound(e){
    playerSelection = e.target.id;
    computerSelection = computerPlay();
    if (playerSelection === computerSelection) {
        result.textContent = "Tie!";
    }
    //player rock, cpu paper
    else if (playerSelection == 'Rock' && computerSelection == 'Paper') {
        result.textContent = "You Lost!";
        computerScore ++;
        score.textContent = `Player Score: ${playerScore} :: Computer Score: ${computerScore}`;
        checkScore();
    }
    //player paper, cpu scissors
    else if (playerSelection == 'Paper' && computerSelection == 'Scissors') {
        result.textContent = "You Lost!";
        computerScore ++;
        score.textContent = `Player Score: ${playerScore} :: Computer Score: ${computerScore}`;
        checkScore();
    }
    //player scissors, cpu rock
    else if (playerSelection == 'Rock' && computerSelection == 'Paper') {
        result.textContent = "You lost!";
        computerScore ++;
        score.textContent = `Player Score: ${playerScore} :: Computer Score: ${computerScore}`;
        checkScore();
    }
    else {
        result.textContent = "You won!";
        playerScore++;
        score.textContent = `Player Score: ${playerScore} :: Computer Score: ${computerScore}`;
        checkScore();
    }

    
}

function restartGame () {
    playerScore = 0;
    computerScore = 0;
    score.textContent = `Player Score: ${playerScore} :: Computer Score: ${computerScore}`;
    result.textContent = ''
    document.getElementById('Rock').style.display = 'inline';
    document.getElementById('Paper').style.display = 'inline';
    document.getElementById('Scissors').style.display = 'inline';
    document.getElementById('Restart').style.display = 'none';
}


document.getElementById('Restart').style.display = 'none'

let playerScore = 0;
let computerScore = 0;

//on submit click, hide submit and show RPS buttons and result and score lines

const buttons = Array.from(document.querySelectorAll('button'));
console.log(buttons);
buttons.forEach(button =>  button.addEventListener('click', playRound) );
document.getElementById('Restart').onclick = restartGame;

//result and score line populate
//result = document.getElementById('Result');
score = document.getElementById('Score');
result = document.getElementById('Result');

score.textContent = `Player Score: ${playerScore} :: Computer Score: ${computerScore}`
