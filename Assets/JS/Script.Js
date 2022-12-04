var startQuiz = document.querySelector("#start-quiz");
var beginBttn = document.querySelector("#begin_btn");
var questionScreen = document.querySelector('#questionscreen');
var quesEl = document.querySelector('#question');
var ansListEl = document.querySelector('#answerList');
var scoreScreen = document.querySelector('#score-screen');

var False = "Wrong!";
var True = "Correct";

//array for the questions to be asked on the page
var quizquestions = [
  {
    question: "Commonly used data types DON'T Include:",
    answers: ["Strings", "Booleans", "Alerts", "Numbers"],
    correct: 3,
  },
  {
    question: "The condition in an if/else statement is enclosed with__________.",
    answers: ["Quotes", "Curly Brackets", "Parenthesis", "Square Brackets"],
    correct: 3,
  },
  {
    question: "Arrays in Javascript can be used to store______.",
    answers: ["Numbers and Strings", "Other Arrays", "Boleans", "All of the Above"],
    correct: 4,
  },
  {
    question: "String values must be enclosed within ____ when being assigned to variables.",
    answers: ["Commas", "Curly Brackets", "Quotes", "Parenthesis"],
    correct: 3,
  },

  {
    question: "A very useful tool used during development and debugging for printing content to the debugger is:",
    answers: ["Javascript", "Terminal/Bash", "For Loops", "Console.log"],
    // 1: "Javascript",
    // 2: "Terminal/Bash",
    // 3: "For Loops",
    // 4: "Console.log",
    correct: 4,
  },
];

var questionBank = 0;
//function to start the quiz
function runQuiz () {
    questionBank = 0;

    //hide the start screen
    startQuiz.setAttribute("class", "hidden");

    //show the quiz screen
    questionScreen.setAttribute("class", "hidden"),

    //display the question and answers
    displayQuestion();
}

function endQuiz() {
    //hide quiz screen
    questionScreen.setAttribute("class", "hidden");

    //show score summary screen
    scoreScreen.setAttribute("class", "flex");

    //allow user to input initials

    //store initials and score to local storage
}

function displayQuestion() {
    if (questionBank >= question.length) {
        endQuiz();
    }

//clears the answers list
ansListEl.innerHTML = "";

//show the question
quesEl.textContent = question[questionBank].question;

//populate answer list
for (let i = 0; i < question[questionBank].answers.length; i++) {
    //create a list item element
    let listItem = document.createElement("li");

    //create a button element for the answers
    let answerButton = document.createElement("button");

    //add answer text to the button
    answerButton.textContent=questions[questionBank].answers[i];

    //might also want to add a data attribute with the index i for answer checking

    //add button to the list item element
    listItem.appendChild(answerButton);

    //add the list item to the answer list
    ansListEl.appendChild(listItem);
}
}

function checkAnswers (event) {
    //stop the click event from further propogation
    event.stopPropagation();

    //logic for checking answer and adding to score

    //increment question index variable
    questionBank++;

    //display next question
    displayQuestion();
}

//Event Listeners
beginBttn.addEventListener("click", "runQuiz");

//take advantage of event delegation and listen for click on the parent container
ansListEl.addEventListener("click", checkAnswers);





//this function will run the quiz
//function runQuiz

// append LI
// var listItem =document.createElement("li");
// var answerListEl = document.querySelector('#answerList');




