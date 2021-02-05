import Request from './assets/script/Request.js'
import UI from './assets/script/UI.js'

const startButton = document.querySelector('#start');
startButton.addEventListener('click', event => {
    event.preventDefault();
    UI.startGame()
})

const formulary = document.querySelector('#trivia-form');
formulary.addEventListener('submit', event => {
    event.preventDefault();
    UI.showScoreButton();
    Request.getQuestions()
        .then(response => response.json())
        .then(data => UI.printQuestions(data.results))
})

Request.getCategories()
    .then(response => response.json())
    .then(data => UI.printCategories(data.trivia_categories))

const scoreButton = document.querySelector('#score-button')
scoreButton.addEventListener('click', event => {
    event.preventDefault();
    UI.getScore()
})