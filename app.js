// import functions and grab DOM elements
import { renderGame } from './render-utils.js';
const currentGameEl = document.getElementById('current-game-container');
const pastGamesEl = document.getElementById('past-games-container');

const nameForm = document.querySelectorAll('#name-form');
const teamOneAddButton = document.querySelector('team-one-add-button');
const teamTwoAddButton = document.querySelector('team-two-add-button');
const teamOneSubtractButton = document.getElementById('team-one-subtract-button');
const teamTwoSubtractButton = document.getElementById('team-two-subtract-button');
const finishGameButton = document.querySelector('finish-game-button');
const teamOneLabel = document.getElementById('team-one-name');
const teamTwoLabel = document.getElementById('team-two-name');

const pastGames = 0;

let name1 = '';
let name2 = '';
let score1 = 0;
let score2 = 0;

nameForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(nameForm);
  
    name1 = formData.get('team-one');
    name2 = formData.get('team-two');

    // name1 === name1;
    // name2 === name2;
    
    // nameForm.reset();
    displayCurrentGameEl();
});


teamOneAddButton.addEventListener('click', () => {
    score1++;
    
    displayCurrentGameEl();
});

teamTwoAddButton.addEventListener('click', () => {
    score2++;

    displayCurrentGameEl();
});

teamOneSubtractButton.addEventListener('click', () => {
    score1--;

});

teamTwoSubtractButton.addEventListener('click', () => {
    score2--;
});

function displayCurrentGameEl() {
    currentGameEl.textContent = '';

    teamOneLabel.textContent = score1;
    teamTwoLabel.textContent = score1;

    const currentGame = name1 + name2;

    const gameEl = renderGame(currentGame);
    
    gameEl.classList.add('current');
}


function displayAllGames() {
    for (let game of pastGames) {
        const gameEl = renderGame(pastGames);

        gameEl.classList.add('past');
        
        pastGamesEl.append(game);
    }
}


finishGameButton.addEventListener('click', () => {
    const currentGame = [name1, name2, score1, score2];

    pastGames.push(currentGame);

    displayAllGames();

    name1 = '';
    name2 = '';
    score1 = 0;
    score2 = 0;

    displayCurrentGameEl();
});
