//this will be for the highscores btn
  var scoreBtn = document.querySelector('#viewscores');
  
  //this will be the rankings of players who have used this.
  function showScores (){
      var scores = JSON.parse(window.localStorage.getItem(scores)) || [];
      scores.sort(function (a,b) {
          return b.scores-a.scores;
      });
      scores.forEach(function(scores){
          var listItems = document.createElement("li");
          listItems.textContent = scores.yourname + "-" +scores.scores;
          var orderList = document.getElementById("scores");
          orderList.appendChild(listItems);
      });
  }
  
  //this clears previous scoring
  function clearScores() {
      window.localStorage.removeItem("scores");
      window.location.reload();
  
  }

  document.getElementById("clear").onClick = clearScores;
  showScores();