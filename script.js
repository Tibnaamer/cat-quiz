/* My code has been supported by using the Prettier code formatter extension */

const questions = [
  {
    question: "Who has more bones in their body?",
    answers: [
      { text: "Cats", correct: true },
      { text: "Humans", correct: false },
      { text: "Rabbits", correct: false },
      { text: "Hamsters", correct: false },
    ],
  }, // Cats have more bones than humans. Cats have approximately 230 - 250 bones, while an adult human has 206.
  {
    question: "On average, how many hours a day do cats sleep?",
    answers: [
      { text: "Less than 4 hours", correct: false },
      { text: "5 - 11 hours", correct: false },
      { text: "12 - 16 hours", correct: true },
      { text: "More than 16 hours", correct: false },
    ],
  }, // Cats spend around 12 to 16 hours of their day sleeping; this high amount of rest is due to an evolutionary trait designed to conserve energy for hunting.
  {
    question: "Which domesticated Cat breed is the largest?",
    answers: [
      { text: "Ragdoll", correct: false },
      { text: "Maine Coon", correct: true },
      { text: "Siamese", correct: false },
      { text: "Balinese", correct: false },
    ],
  },
  {
    question: "Who is commonly credited with inventing the Cat flap?",
    answers: [
      { text: "Freddie Mercury", correct: false },
      { text: "Sir Isaac Newton", correct: true },
      { text: "Benjamin Franklin", correct: false },
      { text: "Charles Darwin", correct: false },
    ],
  }, // Sir Isaac Newton is often credited with inventing the cat flap, although this is likely a myth; it is believed he made it in order to prevent his Cats from interrupting light-sensitive experiments by scratching at his door.
  {
    question: "whose heart beats faster?",
    answers: [
      { text: "Cats", correct: false },
      { text: "Humans", correct: false },
      { text: "Dogs", correct: false },
      { text: "Hamster ", correct: true },
    ],
  }, // A Cat's heart rate ranges from 140 to 220 beats per minute, while a hamster has a significantly faster resting heart rate, commonly ranging between 250 and 600 beats per minute.
  {
    question: "On average, how long do Cats live?",
    answers: [
      { text: "Around 5 years", correct: false },
      { text: "Around 10 years", correct: false },
      { text: "Around 15 years", correct: true },
      { text: "Around 25 years ", correct: false },
    ],
  }, // On average, indoor Cats usually live between 12 and 20 years old. Outdoor cats typically don't live as long.
  {
    question: "What is a group of Cats called?",
    answers: [
      { text: "Clowder ", correct: true },
      { text: "Clawers ", correct: false },
      { text: "Cloup", correct: false },
      { text: "Clapers", correct: false },
    ],
  }, // A group of Cats is known as a clowder.
  {
    question: "What is the top speed of a house cat?",
    answers: [
      { text: "0 - 6 mph ", correct: false },
      { text: "7 - 13 mph ", correct: false },
      { text: "14 - 19 mph", correct: false },
      { text: "20mph and above", correct: true },
    ],
  }, // The top speed for most house cats is around 20 miles per hour; however, a cat's speed may vary depending on factors such as fitness, breed, health, and age.
];


// Grabs elements from HTML to be used in JS
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

// Variables to keep track of current question and score
let currentQuestionIndex = 0;
let score = 0;

// Function to start the quiz
function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  showQuestion();
}

// Function to show the current question and its answers
function showQuestion() {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

  // Loop through the answers and create buttons for each answer
  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
  });
}

// Function to reset the state for the next question
function resetState() {
  nextButton.style.display = "none";
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

// Function to handle answer selection
function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";
  if (isCorrect) {
    selectedBtn.classList.add("correct");
    score++;
  } else {
    selectedBtn.classList.add("incorrect");
  }
}

startQuiz();
