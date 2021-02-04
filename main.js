import Request from './assets/script/Request.js'
import UI from './assets/script/UI.js'

const startButton = document.getElementById('start');
startButton.addEventListener('submit', event => {
    event.preventDefault();
    alert('ejecutando')
})

const formulary = document.querySelector('#trivia-form');
formulary.addEventListener('submit', event => {
    event.preventDefault();
    Request.getQuestions()
        .then(response => response.json())
        .then(data => UI.printQuestions(data.results))
})

Request.getCategories()
    .then(response => response.json())
    .then(data => UI.printCategories(data.trivia_categories))