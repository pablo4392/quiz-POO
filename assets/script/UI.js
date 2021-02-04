class UI {
    static removeClass(){
        $('#trivia-card').removeClass('hide-card');
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
}

export default UI;