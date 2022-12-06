//array for the questions to be asked on the page
var quiz = [
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
  var quizEl = document.querySelector('#questionscreen');
  var timeEl = document.querySelector('#timer');
  var answerEl = document.querySelector('#lists');
  var initialsBtn = document.querySelector("#input-name");
  var beginBtn = document.querySelector("#begin_btn");
  var namingEl = document.querySelector("#yourname");
  var resultEl = document.querySelector("#result");
  var resetBtn = document.querySelector('#reset');
  // var enterBttn = document.querySelector()
  // var questionScreen = document.querySelector('#questionscreen');
  // var scoreScreen = document.querySelector('#score-screen');
  
  var quizIndex = 0; //questionsIndex
  var time = quiz.length*15;
  var timerId;
  
  //Start the quiz
  function runQuiz () {
      timerId = setInterval(timeClock, 1000);
      timeEl.textContent = time;
      var startEl = document.getElementById("startpage");
      startEl.setAttribute("class", "hidden");
      quizEl.removeAttribute("class");
      quickQuestion();
  }
  
  //build the array loop for the questions.
  function quickQuestion () {
      var quizQuestion = quiz[quizIndex];
      var riddleEl = document.getElementById("riddle");
      riddleEl.textContent = quizQuestion.ques;
      answerEl.innerHTML="",
      quizQuestion.answers.forEach(function(choose, i) {
          var selectBtn = document.createElement('button');
          selectBtn.setAttribute("value", choose);
          selectBtn.textContent = i+1+". "+ choose;
          selectBtn.onclick = quesClick;
          answerEl.appendChild(selectBtn);
      });
  }
  
  //this will check for the correct answers
  function quesClick (){
      if (this.value !== quiz[quizIndex].correct) {
          time -= 10;
          if (time <0) {
              time =0;
          }
          timeEl.textContent = time;
          resultEl.textContent = 'NOPE! The right answer was ' + quiz[quizIndex].correct ;
      } else {
          resultEl.textContent = 'BING BAM BOOM!';
      }
      resultEl.setAttribute("class", "result");
      setTimeout(function(){
          resultEl.setAttribute("class", "result hidden");
      }, 2000);
      quizIndex++;
      if(quizIndex ===quiz.length) {
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
      quizEl.setAttribute("class", "hidden");
  }
  
  //end if timer is up
  function timeClock () {
      time--;
      timeEl.textContent = time;
      if (time <=0) {
          endQuiz();
      }
  }
  
  //this will save the scores to local
  
  function scores () {
      var playerName = namingEl.value.trim ();
      if(playerName !==""){
          var playerScore = window.localStorage.getItem(playerScore) || [];
          var newScr = {
              score: time,
              playerName:playerName
          };
          playerScore.push(newScr);
          window.localStorage.setItem("playerScore");
      }
  }
  
  //saves players score 
  
  function eventEnter(event) {
      if (event.key === "Enter") {
          scores();
      }
  }
  
  namingEl.onkeyup = eventEnter;
  
  //save users' score after clicking submit
  initialsBtn.onclick = scores;
  
  //start quiz after clicking start
  beginBtn.onclick = runQuiz;
  

  
  
  
  
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
  
  // //populate git answer list
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