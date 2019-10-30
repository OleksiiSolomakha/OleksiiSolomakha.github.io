const btn = document.querySelector('#shake-btn');
const showAnswer = document.querySelector('.answer');
const answers = [
  'Yes',
  'No',
  'Maybe',
  'Not now',
  'Ask again',
  'Probably',
  'Shure',
  'Definitely'
];

btn.addEventListener('click', () => {
  showAnswer.textContent = answers[Math.floor(Math.random() * answers.length)];
  showAnswer.classList.add('animation');
  setTimeout(deleteClass, 1000);
});

function deleteClass() {
  showAnswer.classList.remove('animation');
}
