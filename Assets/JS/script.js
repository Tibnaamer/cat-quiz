/* I have used the following extensions: Prettier - Code Formatter, Live Server, GitHub Copilot */

const questions = [
  {
    question: "Who has more bones in their body?",
    answers: [
      { text: "Cats", correct: true },
      { text: "Humans", correct: false },
      { text: "Rabbits", correct: false },
      { text: "Hamsters", correct: false },
    ],
    fact: "Cats have more bones than humans. Cats have approximately 230 - 250 bones, while an adult human has 206.",
  },
  {
    question: "On average, how many hours a day do cats sleep?",
    answers: [
      { text: "Less than 4 hours", correct: false },
      { text: "5 - 11 hours", correct: false },
      { text: "12 - 16 hours", correct: true },
      { text: "More than 16 hours", correct: false },
    ],
    fact: "Cats spend around 12 to 16 hours of their day sleeping; this high amount of rest is due to an evolutionary trait designed to conserve energy for hunting.",
  },
  {
    question: "Which domesticated Cat breed is the largest?",
    answers: [
      { text: "Ragdoll", correct: false },
      { text: "Maine Coon", correct: true },
      { text: "Siamese", correct: false },
      { text: "Balinese", correct: false },
    ],
    fact: "The Maine Coon is the largest domesticated cat breed, known for its impressive size and gentle temperament.",
  },
  {
    question: "Who is commonly credited with inventing the Cat flap?",
    answers: [
      { text: "Freddie Mercury", correct: false },
      { text: "Sir Isaac Newton", correct: true },
      { text: "Benjamin Franklin", correct: false },
      { text: "Charles Darwin", correct: false },
    ],
    fact: "Sir Isaac Newton is often credited with inventing the cat flap, although this is likely a myth; it is believed he made it in order to prevent his Cats from interrupting light-sensitive experiments by scratching at his door.",
  },
  {
    question: "Which animal has a faster heart rate?",
    answers: [
      { text: "Cats", correct: false },
      { text: "Humans", correct: false },
      { text: "Dogs", correct: false },
      { text: "Hamster ", correct: true },
    ],
    fact: "A Cat's heart rate ranges from 140 to 220 beats per minute, while a hamster has a significantly faster resting heart rate, commonly ranging between 250 and 600 beats per minute.",
  },
  {
    question: "On average, how long do Cats live?",
    answers: [
      { text: "Around 5 years", correct: false },
      { text: "Around 10 years", correct: false },
      { text: "Around 15 years", correct: true },
      { text: "Around 25 years ", correct: false },
    ],
    fact: "On average, indoor Cats usually live between 12 and 20 years old. Outdoor cats typically don't live as long.",
  },
  {
    question: "What is a group of Cats called?",
    answers: [
      { text: "Clowder ", correct: true },
      { text: "Clawers ", correct: false },
      { text: "Cloup", correct: false },
      { text: "Clapers", correct: false },
    ],
    fact: "A group of Cats is known as a clowder, while a group of kittens is called a kindle. Finally, a group of kittens born to the same mother is called a litter.",
  },
  {
    question: "What is the top speed of a house cat?",
    answers: [
      { text: "0 - 6 mph ", correct: false },
      { text: "7 - 13 mph ", correct: false },
      { text: "14 - 19 mph", correct: false },
      { text: "20mph and above", correct: true },
    ],
    fact: "The top speed for most house cats is around 20 miles per hour; however, a cat's speed may vary depending on factors such as fitness, breed, health, and age.",
  },
];

// Grabs elements from HTML to be used in JS
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const startButton = document.getElementById("start-btn");
const closeButton = document.getElementById("close-btn");
const tutorialButton = document.getElementById("tutorial-btn");
const tutorialDialog = document.getElementById("tutorial-dialog");
const factElement = document.getElementById("fact");

// Variables to keep track of current question and score
let currentQuestionIndex = 0;
let score = 0;
let quizQuestions = [];

// Function to start the quiz
function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";

  // Create a copy of questions and shuffle's them so the quiz is different each time
  quizQuestions = [...questions].sort(() => Math.random() - 0.5).slice(0, 8);
  showQuestion();
}

// Function to show the current question and its answers
function showQuestion() {
  resetState();
  let currentQuestion = quizQuestions[currentQuestionIndex];
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
  factElement.style.display = "none";
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
  // Disable all buttons and show the correct answer
  Array.from(answerButtons.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });

  // Displays a fun fact
  let currentQuestion = quizQuestions[currentQuestionIndex];
  factElement.innerHTML = currentQuestion.fact;
  factElement.style.display = "block";

  nextButton.style.display = "block";
}

// Function to show the final score after the quiz is completed
function showScore() {
  resetState();
  questionElement.innerHTML = `You scored ${score} out of ${quizQuestions.length}!`;
  nextButton.innerHTML = "Play Again";
  nextButton.style.display = "block";
}

// Function to handle the next button click, showing the score if it's the end of the quiz
function handleNextButton() {
  currentQuestionIndex++;
  if (currentQuestionIndex < quizQuestions.length) {
    showQuestion();
  } else {
    showScore();
  }
}

// Event listener for the next button to handle quiz progression and restarting
nextButton.addEventListener("click", () => {
  if (currentQuestionIndex < quizQuestions.length) {
    handleNextButton();
  } else {
    startQuiz();
  }
});

// Event listener for the start button
startButton.addEventListener("click", () => {
  startButton.style.display = "none";
  document.querySelector(".quiz").style.display = "block";
  startQuiz();
});

// Event listener for the tutorial button
tutorialButton.addEventListener("click", () => {
  tutorialDialog.showModal();
});

// Event listener to close the tutorial dialog when clicking outside of it
tutorialDialog.addEventListener("click", (event) => {
  if (event.target === tutorialDialog) {
    tutorialDialog.close();
  }
});

// Event listener for the close button in the tutorial dialog
closeButton.addEventListener("click", () => {
  tutorialDialog.close();
});
