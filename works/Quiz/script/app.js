const correctAnswers = ['A', 'C', 'B', 'C'];
const form = document.querySelector('.quiz-form');
const result = document.querySelector('.result');
const header = document.querySelector('.intro');

form.addEventListener('submit', e => {
  e.preventDefault();

  let score = 0;
  const userAnsvers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];

  // check answers
  userAnsvers.forEach((answer, index) => {
    if(answer === correctAnswers[index]){
      score += 25;
    }
  });
  
  // shows result
  scrollTo(0,0);
  result.classList.remove('d-none');
  header.classList.add('d-none');
  
  // score animation
  let output = 0;
  const timer = setInterval(() => {
    result.querySelector('span').textContent = `${output}%`;
    if(output === score){
      clearInterval(timer);
    } else {
      output++
    }
  }, 10);
});