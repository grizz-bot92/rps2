let scores = {
    humanScore: 0,
    computerScore: 0,
}

const container = document.getElementById('container');
const result = document.createElement('div');
const rock = document.createElement('button');
const paper = document.createElement('button');
const scissors = document.createElement('button');

container.appendChild(rock);
container.appendChild(paper);
container.appendChild(scissors);

document.body.appendChild(result);

const buttons = document.querySelectorAll('button');

rock.id = 'rock';
paper.id = 'paper';
scissors.id = 'scissors';
result.id = 'result';

rock.textContent = '🪨';
paper.textContent = '📜';
scissors.textContent = '✂️';
result.innerHTML = 'Pick!'



function playRound(playerChoice){
    const choices = ["rock", "paper", "scissors"];
    let random = Math.floor(Math.random() * choices.length);
    computerChoice = choices[random];
    result.innerHTML = `Player:${scores.humanScore}<br>Computer:${scores.computerScore}`    

            
    if(playerChoice === computerChoice){
        result.innerHTML = 'It\'s a Draw! Try again!';
    }else if(
            playerChoice == 'rock' && computerChoice == 'scissors' ||
            playerChoice == 'paper' && computerChoice == 'rock' ||
            playerChoice == 'scissors' && computerChoice == 'paper'
        ){
            scores.humanScore++
        } else scores.computerScore ++
    declareWinner();
};


buttons.forEach((button) => {
    button.addEventListener('click', (e) =>{
        const playerChoice = e.target.id;
        playRound(playerChoice);
        console.log(playerChoice)
    });

});

function declareWinner(){
    if (scores.humanScore == 5){
        result.innerHTML = 'You Win';
        scores.humanScore = 0;
        scores.computerScore = 0;
    } else if(scores.computerScore == 5){
        result.innerHTML = 'You Lose!';
        scores.humanScore = 0;
        scores.computerScore = 0;
    };
}