//array for the questions to be asked on the page
var questions = [
  {
    ques: "Commonly used data types DON'T Include:",
    answers: ["Strings", "Booleans", "Alerts", "Numbers"],
    correct: "Alerts",
  },
  {
    ques: "The condition in an if/else statement is enclosed with__________.",
    answers: ["Quotes", "Curly Brackets", "Parenthesis", "Square Brackets"],
    correct: "Parenthesis",
  },
  {
    ques: "Arrays in Javascript can be used to store______.",
    answers: ["Numbers and Strings", "Other Arrays", "Boleans", "All of the Above"],
    correct: "All of the Above",
  },
  {
    ques: "String values must be enclosed within ____ when being assigned to variables.",
    answers: ["Commas", "Curly Brackets", "Quotes", "Parenthesis"],
    correct: "Quotes",
  },

  {
    ques: "A very useful tool used during development and debugging for printing content to the debugger is:",
    answers: ["Javascript", "Terminal/Bash", "For Loops", "Console.log"],
    // 1: "Javascript",
    // 2: "Terminal/Bash",
    // 3: "For Loops",
    // 4: "Console.log",
    correct: "Console.log",
  },
];

//DOM elements to be manipulated
var countEl = document.querySelector("counter");
var screenEl = document.querySelector('#questionscreen');
var ansListEl = document.querySelector('#answerList');
var initialsBttn = document.querySelector("#input-name");
var nameingEl = document.querySelector("#yourname");
var beginBttn = document.querySelector("#begin_btn");
var resultEl = document.querySelector("result");
// var enterBttn = document.querySelector()
// var questionScreen = document.querySelector('#questionscreen');
// var scoreScreen = document.querySelector('#score-screen');

var quizquestions = 0; //questionsIndex
var time = questions.length*15;
var timerId;

//Start the quiz
function runQuiz () {
    timerId = setInterval(tickoftheClock, 1000);
    countEl.textContent = time;
    var startingpageEl = document.getElementById("start-quiz");
    startingpageEl.setAttribute("class", "hidden");
    quesEl.removeAttribute("class");
    quickQuestion();
}

//build the array loop for the questions.
function quickQuestion () {
    var quizquestion = questions[quizquestions];
    var quesEl = document.getElementById("question");
    quesEl.textContent = quizquestion.ques;
    ansListEl.innerHTML="",
    quizquestion.answers.forEach(function(choice, i) {
        var choosebtn = document.createElement('button');
        choosebtn.setAttribute("value", choose);
        choosebtn.textContent = i+1+". "+ choose;
        choosebtn.onclick = quesClick;
        ansListEl.appendChild(choosebtn);
    });
}

//this will check for the correct answers
function quesClick (){
    if (this.value !== questions[quizquestions].correct) {
        time -= 10;
        if (time <0) {
            time =0;
        }
        countEl.textContent = time;
        resultEl.textContent = 'NOPE! The right answer was ${questions[quizquestions].correct}.';
    } else {
        resultEl.textContent = 'BING BAM BOOM!';
    }
    resultEl.setAttribute("class", "result");
    setTimeout(function(){
        resultEl.setAttribute("class", "result hidden");
    }, 2000);
    quizquestions++;
    if(quizquestions ===questions.length) {
        endQuiz();
    } else {
        quickQuestion();
    }
}

//ends the quiz by hiding questions, stops timer and shows the final score for the player/user
function endQuiz() {
    clearInterval(timerId);
    var endEl = document.getElementById("score-screen");
    endEl.removeAttribute("class");
    var finEl = document.getElementById("final");
    finEl.textContent = time;
    screenEl.setAttribute("class", "hidden");
}

//end if timer is up
function tickoftheClock () {
    time--;
    countEl.textContent = time;
    if (time <=0) {
        endQuiz();
    }
}

//this will save the scores to local

function scores () {
    var yourname = nameingEl.value.trim ();
    if(yourname !==""){
        var playerscore = window.localStorage.getItem(playerscore) || [];
        var newscr = {
            score: time,
            yourname:yourname
        };
        playerscore.push(newscr);
        window.localStorage.setItem("playerscore");
    }
}

//saves players score 

function eventEnter(event) {
    if (event.key === "Enter") {
        scores();
    }
}

nameingEl.onkeyup = eventEnter;

//save users' score after clicking submit
initialsBttn.onclick = scores;

//start quiz after clicking start
beginBttn.onclick = runQuiz;



// //function to start the quiz
// function runQuiz () {
//     quizquestions = 0;

//     //hide the start screen
//     startQuiz.setAttribute("class", "hidden");

//     //show the quiz screen
//     questionScreen.setAttribute("class", "hidden"),

//     //display the question and answers
//     displayQuestion();
// }

// function endQuiz() {
//     //hide quiz screen
//     questionScreen.setAttribute("class", "hidden");

//     //show score summary screen
//     scoreScreen.setAttribute("class", "flex");

//     //allow user to input initials

//     //store initials and score to local storage
// }

// function displayQuestion() {
//     if (quizquestions >= quizquestions.length) {
//         endQuiz();
//     }

// //clears the answers list
// ansListEl.innerHTML = "";

// //show the question
// // quesEl.textContent = quesEl[questionBank].quesEl;

// //populate answer list
// for (let i = 0; i < question[quizquestions].answers.length; i++) {
//     //create a list item element
//     let listItem = document.createElement("li");

//     //create a button element for the answers
//     let answerButton = document.createElement("button");

//     //add answer text to the button
//     answerButton.textContent=questions[quizquestions].answers[i];

//     //might also want to add a data attribute with the index i for answer checking

//     //add button to the list item element
//     listItem.appendChild(answerButton);

//     //add the list item to the answer list
//     ansListEl.appendChild(listItem);
// }

// }

// function checkAnswers (event) {
//     //stop the click event from further propogation
//     event.stopPropagation();

//     //logic for checking answer and adding to score

//     //increment question index variable
//     questionBank++;

//     //display next question
//     displayQuestion();
// }

// //Event Listeners
// beginBttn.addEventListener("click", runQuiz);
// // countdown.addEventListener("click", countdown);

// //take advantage of event delegation and listen for click on the parent container
// ansListEl.addEventListener("click", checkAnswers);


// //countdown timer
// var EndGame = 0;

// function countdown () {
//     document.getElementById("counter").innerHTML = counter;
//     timer = setInterval(function() {
// counter--;
// document.getElementById("counter").innerHTML = counter;
// if (counter === 0 && EndGame === 0) {
//     clearInterval(timer);
//     endGame();
// }
//     }, 1000);
// }



// // append LI
// var listItem =document.createElement("li");
// // var answerListEl = document.querySelector('#answerList');




