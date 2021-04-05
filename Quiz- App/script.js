const myQuestions = [
  {
    question: "Q1 - Who invented JavaScript?",
    answers: {
      a: "Douglas Crockford",
      b: "Sheryl Sandberg",
      c: "Brendan Eich",
      d: "none of the above",
    },
    correctAnswer: "c",
  },
  {
    question: "Q2 - Which one of these is a JavaScript package manager?",
    answers: {
      a: "npm",
      b: "TypeScript",
      c: "Node.js",
    },
    correctAnswer: "a",
  },
  {
    question: "Q3 - Which tool can you use to ensure code quality?",
    answers: {
      a: "Angular",
      b: "jQuery",
      c: "RequireJS",
      d: "ESLint",
    },
    correctAnswer: "d",
  },
];
const ScorePanel = document.querySelector(".ScoreBox");
const Questn = document.querySelector(".Question");
let answers = document.querySelectorAll(".Answer");
const QSTList = document.querySelector(".QSTList");
const Option1 = document.querySelector("#Option1");
const Option2 = document.querySelector("#Option2");
const Option3 = document.querySelector("#Option3");
const Option4 = document.querySelector("#Option4");
const next = document.querySelector("#submit");
const loder = document.querySelector(".loder");
let questionCounts = 0;
let score = 0;

function loadQuestions() {
  
  if (questionCounts == myQuestions.length) {
    ScorePanel.innerHTML = `
    <div class="score-palnnel">         
     <h5> Your Score is  ${score} / ${myQuestions.length}</h5>
    <h4 id="congatsMsg">Congratulation</h4>
    <button type="submit" class="btn" style="display:inline-block; margin:4px 10px;" onclick="location.reload()">Play Again</button>
    <button type="submit" style="margin:4px 10px; display:inline-block;" class="btn" onclick="history.back()">Exit</button></div>`;
    QSTList.innerHTML = "";
    QSTList.style.backgroundColor = transparent;
    document.querySelector(".inner-container").style.padding = 0;
  } else {
  }

  Questn.innerHTML = myQuestions[questionCounts].question;
  const QuestionList = myQuestions[questionCounts];
  Questn.innerText = QuestionList.question;
  Option1.innerText = QuestionList.answers.a;
  Option2.innerText = QuestionList.answers.b;
  Option3.innerText = QuestionList.answers.c;
  Option4.innerText = QuestionList.answers.d;

  questionCounts++;
}
loadQuestions();

function checkAnswer() {
  answers.forEach((AnsChecked) => {
    if (AnsChecked.checked) {
      myQuestions.forEach((CHECKans) => {
        if (AnsChecked.id == CHECKans.correctAnswer) {
          score = score + 1;
        } else {
        }
      });
    }
    AnsChecked.checked = 0;
  });
}
next.addEventListener("click", () => {
  const CheckAns = checkAnswer();
  loadQuestions();
});
