class UI {
    static startGame() {
        const cardStart = document.getElementById('card-presentation');
        const triviaCard = document.getElementById('trivia-card');
        cardStart.classList.add('hide-element');
        triviaCard.classList.remove('hide-element');
    }

    static showScoreButton() {
        const scoreButton = document.getElementById('score-container');
        const triviaCard = document.getElementById('trivia-card');
        triviaCard.classList.add('hide-element');
        scoreButton.classList.remove('hide-element');
    }

    static printCategories(categories) {
        const container = document.getElementById('category');
        categories.forEach(category => {
            container.innerHTML += `<option value="${category.id}">${category.name}</option>`;            
        });
    }

    static printQuestions(questions) {
        const questionContainer = document.getElementById('questions-container');
        questionContainer.innerHTML = '';

        questions.forEach((question, index) => {
            const answer01 = `<label class="form-check-label"><input class="form-check-input" type="radio" name="card-${index}" id="correct" value="1" required>${question.correct_answer}</label>`,
                  answer02 = `<label class="form-check-label"><input class="form-check-input" type="radio" name="card-${index}" id="wrong01" value="0" required>${question.incorrect_answers[0]}</label>`,
                  answer03 = `<label class="form-check-label"><input class="form-check-input" type="radio" name="card-${index}" id="wrong02" value="0" required>${question.incorrect_answers[1]}</label>`,
                  answer04 = `<label class="form-check-label"><input class="form-check-input" type="radio" name="card-${index}" id="wrong03" value="0" required>${question.incorrect_answers[2]}</label>`;
            const arrayAnswers = [answer01, answer02, answer03, answer04];

            //random function
            arrayAnswers.sort(() => {
                return Math.random() - 0.5
            })

            questionContainer.innerHTML += `<div class="col-md-6 my-4">
                                                <div class="card h-100">
                                                    <div class="card-body">
                                                        <div class="question">${question.question}</div>
                                                        <div>
                                                            <form>
                                                                <p class="answers">${arrayAnswers[0]}</p>
                                                                <p class="answers">${arrayAnswers[1]}</p>
                                                                <p class="answers">${arrayAnswers[2]}</p>
                                                                <p class="answers">${arrayAnswers[3]}</p>
                                                            </form>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>`
        });
    }

    static getScore() {
        const questionContainer = document.getElementById('questions-container');
        const scoreContainer = document.getElementById('score-container')
        questionContainer.innerHTML = '';
        let i = 0;
        let total = 0; 

        while(i < 10) {
            const result = document.querySelector(`input[name="card-${i}"]:checked`).value;
            console.log(result);
            i++
            if (result == 1) {
                total += 1
            }
        }

        scoreContainer.innerHTML = `<div class="col col-md-6 mb-5">
                                        <div class="card card-score">
                                            <div class="card-body">
                                                <h3>YOUR SCORE IS</h3>
                                                <P>${total}</P>
                                            </div>
                                        </div>
                                    </div>`
    }
}

export default UI;