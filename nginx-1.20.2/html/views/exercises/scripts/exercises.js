const form = document.querySelector('#dynamic-form');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  calculateTotal();
});

function loadQuestions() {
  fetch('shared/const/questions.json')
    .then((questions) => questions.json())
    .then((questionArray) => renderForm(questionArray));
}

loadQuestions();

function renderForm(questions) {
  const numberOfSections = Math.ceil(questions.length / 2);
  for (let i = 0; i < numberOfSections; i++) {
    const container = document.createElement('div');
    container.classList.add('form-group');
    container.id = `form-group-${i}`;
    const firstQuestion = questions[i*2];
    const secondQuestion = questions[i*2 + 1];
    renderQuestion(firstQuestion, container);
    if (secondQuestion) {
      renderQuestion(secondQuestion, container);
    }

    if (i !== 0){
      container.appendChild(createFormPreviousButton(i));
    }
    container.appendChild(createFormNextButton(i, numberOfSections));
    form.appendChild(container);
  }
  finishForm(questions.length);
}

function createFormNextButton(index, numberOfSections) {
  const nextButton = document.createElement('button');
  nextButton.innerText = index === numberOfSections - 1 ? 'Finalizar' : 'Siguiente';
  nextButton.classList.add(index === numberOfSections - 1 ? 'submit-button' :'next-button');
  nextButton.disabled = true;
  if (!nextButton.classList.contains('submit-button')) {
    nextButton.id = `next-${index}`;
  }
  return nextButton;
}

function createFormPreviousButton(index) {
  const previousButton = document.createElement('button');
  previousButton.innerText = 'Anterior';
  previousButton.classList.add('previous-button');
  previousButton.id = `previous-${index}`;
  return previousButton;
}

function renderQuestion(question, container) {
  const internalDiv = document.createElement('div');
  internalDiv.classList.add('question-container');
  const label = document.createElement('label');
  label.innerText = `${question.title} ${question.question}`;
  internalDiv.appendChild(label);
  
  question.answers.forEach((answer) => {
    const questionDiv = document.createElement('div');
    const radio = document.createElement('input');
    radio.type = 'radio';
    radio.name = `question-${question.id}`;
    radio.value = answer.value;
    questionDiv.appendChild(radio);
    const answerLabel = document.createElement('label');
    answerLabel.innerText = answer.answer;
    questionDiv.appendChild(answerLabel);
    internalDiv.appendChild(questionDiv);
  });
  container.appendChild(internalDiv);
};

function changeActive(event, next) {
  event.preventDefault();
  const parent = event.target.parentElement;
  const id = event.target.id;
  parent.classList.remove('active');

  const nextId = id.split('-')[1];
  document.querySelector(`#form-group-${Number(nextId) + (next ? 1 : -1)}`).classList.add('active');
};

function finishForm(numberOfQuestions) {
  document.querySelector('.form-group').classList.add('active');
  const nextButtons = document.querySelectorAll('.next-button');
  nextButtons.forEach((button) => {
    button.addEventListener('click',(event) => changeActive(event, true));
  });
  const previousButtons = document.querySelectorAll('.previous-button');
  previousButtons.forEach((button) => {
    button.addEventListener('click',(event) => changeActive(event, false));
  });
  const inputs = document.querySelectorAll('input');
  inputs.forEach((input) => {
    input.addEventListener('change', (event) => {
      checkNextValidity(event);
      checkSubmitValidity(numberOfQuestions);
    })
  })
}

function calculateTotal() {
  const formData = new FormData(form);
  let numberOfQuestions = 0;
  let totalValue = 0;
  for (let value of formData.values()) {
    numberOfQuestions++;
    totalValue += Number(value);
  }
  console.log((totalValue/numberOfQuestions * 10).toFixed(2));
}

function checkNextValidity(event) {
  const sectionContainer = event.target.closest('.form-group');
  const questions = sectionContainer.querySelectorAll('.question-container');
  const nextButton = sectionContainer.querySelector('.next-button');
  if (nextButton) {
    let sectionAnswered = true;
    const formData = new FormData(form);
    questions.forEach((questionContainer) => {
      const input = questionContainer.querySelector('input');
      if (!formData.has(input.name)) {
        sectionAnswered = false;
      }
    })
    if (sectionAnswered) {
      nextButton.disabled = false;
    }
  }
}

function checkSubmitValidity(numberOfQuestions) {
  const formData = new FormData(form);
  let answeredQuestions = 0;
  for (let value of formData.values()) {
    answeredQuestions++;
  }
  const allQuestionAnswered = numberOfQuestions === answeredQuestions;
  if (allQuestionAnswered) {
    document.querySelector('.submit-button').disabled = false;;
  }
}