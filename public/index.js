var gameObject = {
    challenge : "",
    player1 : "",
    player2 : "",
};

var game = document.getElementsByClassName("game")[0];
var challengeContainer = document.getElementsByClassName("pick-game__container")[0];
var symbolContainer = document.getElementsByClassName("pick-game__symbol-container")[0];
var pickChallenge = document.getElementsByClassName("pick-game__challenge");
var challengeButton = document.getElementsByClassName("pick-game__symbol");
var player = document.getElementsByClassName("player")[0];

for(var i = 0; i < challengeButton.length; i++) {
  addListenerToChallengeButtons(i);
}

function addListenerToChallengeButtons(i){
  challengeButton[i].addEventListener("click", function() {

    var symbol = event.target.innerHTML;

    if (gameObject.player1 === "" && gameObject.challenge === 'Human vs. Human'){
      addSymbol(symbol, 'player1');
      player.innerHTML = 'Player 2';
    }
    else if (gameObject.player1 === symbol){
      player.innerHTML = 'That symbol has been taken!';
    }
    else {
      addSymbol(symbol, 'player2');
      swapVisibility(symbolContainer, game);
    }
  });
}

for(var i = 0; i < pickChallenge.length; i++) {
  addListenerToSymbolButtons();
}

function addListenerToSymbolButtons(){
  pickChallenge[i].addEventListener("click", function() {
    var challenge = event.target.innerHTML;

    if (challenge === 'Human vs. Human'){
      player.innerHTML = 'Player 1';
    }

    swapVisibility(challengeContainer, symbolContainer);
    addChallenge(challenge);
  });
}

function addChallenge(challenge){
  gameObject.challenge = challenge;
}

function addSymbol(symbol, player){
  gameObject[player] = symbol;
}

function swapVisibility(visible, hidden){
  hide(visible);
  show(hidden);
}

function hide(element){
  element.classList.add("hidden");
  element.classList.remove("visible");
}

function show(element){
  element.classList.add("visible");
  element.classList.remove("hidden");
}
