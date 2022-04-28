const form = document.querySelector('#dynamic-form')

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
    const nextButton = document.createElement('button');
    nextButton.innerText = 'Next';
    nextButton.classList.add('next-button');
    nextButton.id = `button-${i}`;
    container.appendChild(nextButton);
    form.appendChild(container);
  }
  document.querySelector('.form-group').classList.add('active');
  const buttons = document.querySelectorAll('.next-button');
  buttons.forEach((button) => {
    button.addEventListener('click',(event) => changeActive(event));
  });
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

function changeActive(event) {
  event.preventDefault();
  const parent = event.target.parentElement;
  const id = event.target.id;
  parent.classList.remove('active');

  const nextId = id.split('-')[1];
  document.querySelector(`#form-group-${Number(nextId) + 1}`).classList.add('active');
};