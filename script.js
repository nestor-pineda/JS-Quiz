const correctAnswers = ["B", "B", "B", "B"];
const form = document.querySelector(".quiz-form");
let score = 0;
const resultSection = document.querySelector(".result");
const scoreNumbrer = document.querySelector(".number");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  // score for the users based on the answers
  const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];
  // check ansewrs
  userAnswers.forEach((item, index) => {
    if (item === correctAnswers[index]) {
      score += 25;
    }
  });

  resultSection.classList.remove("d-none");
  scrollTo(0, 0);

  let output = 0;
  const timer = setInterval(() => {
    scoreNumbrer.innerHTML = `${output}%`;
    if (output === 100) {
      clearInterval(timer);
    } else {
      output++;
    }
  }, 10);
});
