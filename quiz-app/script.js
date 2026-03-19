
 const questions = [
  {
    question: "What is the capital of India?",
    answers: ["Mumbai", "Delhi", "Chennai", "Kolkata"],
    correct: 1
  },
  {
    question: "Which planet is known as the Red Planet?",
    answers: ["Earth", "Venus", "Mars", "Jupiter"],
    correct: 2
  },
  {
    question: "What is 5 + 7?",
    answers: ["10", "12", "13", "11"],
    correct: 1
  }
];

let currentQuestionIndex = 0;
let score = 0;

const questionEl = document.getElementById('question');
const answerButtonsEl = document.getElementById('answer-buttons');
const nextBtn = document.getElementById('next-btn');
const scoreContainer = document.getElementById('score-container');
const scoreText = document.getElementById('score');

function showQuestion() {
  resetState();
  const currentQuestion = questions[currentQuestionIndex];
  questionEl.innerText = currentQuestion.question;

  currentQuestion.answers.forEach((answer, index) => {
    const button = document.createElement('button');
    button.innerText = answer;
    button.classList.add('btn');
    button.addEventListener('click', () => selectAnswer(index));
    answerButtonsEl.appendChild(button);
  });
}

function resetState() {
  answerButtonsEl.innerHTML = '';
  nextBtn.classList.add('hide');
  scoreContainer.classList.add('hide');
}

function selectAnswer(index) {
  const correctIndex = questions[currentQuestionIndex].correct;
  const buttons = answerButtonsEl.children;
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].disabled = true;
    if (i === correctIndex) {
      buttons[i].style.backgroundColor = '#66cc66';
    } else if (i === index) {
      buttons[i].style.backgroundColor = '#ff6666'; 
    }
  }
  if (index === correctIndex) score++;
  nextBtn.classList.remove('hide');
}

function showScore() {
  questionEl.innerText = "Quiz Completed!";
  scoreText.innerText = score;
  scoreContainer.classList.remove('hide');
  nextBtn.innerText = "Restart Quiz";
  nextBtn.classList.remove('hide');
}

nextBtn.addEventListener('click', () => {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
    currentQuestionIndex = 0;
    score = 0;
  }
});

showQuestion();

