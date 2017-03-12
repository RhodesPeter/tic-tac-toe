"use strict";

var game = document.getElementsByClassName("game")[0];
var challengeContainer = document.getElementsByClassName("pick-game__container")[0];
var symbolContainer = document.getElementsByClassName("pick-game__symbol-container")[0];
var pickChallenge = document.getElementsByClassName("pick-game__challenge");
var symbolButtons = document.getElementsByClassName("pick-game__symbol");
var player = document.getElementsByClassName("player")[0];
var box = document.getElementsByClassName("box");
var startGameButton = document.getElementsByClassName('game__start-button')[0];
var whoGoesFirst = document.getElementsByClassName('game__who-goes-first')[0];
var gameMessage = document.getElementsByClassName('game__board-message')[0];
var whoGoesFirstButton1 = document.getElementsByClassName('pick-game__player1-button')[0];
var whoGoesFirstButton2 = document.getElementsByClassName('pick-game__player2-button')[0];

for(var i = 0; i < pickChallenge.length; i++) {
  addListenerToChallengeButtons();
}

function addListenerToChallengeButtons(){
  pickChallenge[i].addEventListener("click", function() {
    var challenge = event.target.innerHTML;
    addButtonText(whoGoesFirstButton1, whoGoesFirstButton2, challenge);
    addChallenge(event.target.innerHTML);
    if (challenge === 'Computer vs. Computer'){
      swapVisibility(challengeContainer, whoGoesFirst);
      show(document.getElementsByClassName('game__start-button')[0]);
    }
    else if (challenge === 'Human vs. Human'){
      swapVisibility(challengeContainer, symbolContainer);
      player.innerHTML = 'Player 1';
    }
    else {
      swapVisibility(challengeContainer, symbolContainer);
    }
  });
}

for(var i = 0; i < symbolButtons.length; i++) {
  addListenerTosymbolButtons(i);
}

function addListenerTosymbolButtons(i){
  symbolButtons[i].addEventListener("click", function() {
    var symbol = event.target.innerHTML;
    if (gameState["Player 1"] === '' && gameState.challenge === 'Human vs. Human'){
      addSymbol(symbol, 'Player 1');
      player.innerHTML = 'Player 2';
    }
    else if (gameState["Player 1"] === ''){
      addSymbol(symbol, 'Player 1');
      swapVisibility(symbolContainer, whoGoesFirst);
    }
    else if (gameState["Player 1"] === symbol){
      player.innerHTML = 'That symbol has been taken!';
    }
    else {
      swapVisibility(symbolContainer, whoGoesFirst);
      addSymbol(symbol, 'Player 2');
    }
  });
}

for(var i = 0; i < box.length; i++) {
  addListenersToBoxes(i);
}

function addListenersToBoxes(i){
  box[i].addEventListener("click", function() {
    if (gameState.status === 'off'){ return; }
    if (gameState.board[i] !== ' '){
      return
    }
    else if (gameState.challenge === 'Human vs. Human'){
      markBox(i, gameState.currentTurn);
      humanVsHuman(i);
    }
    else if (gameState.currentTurn === 'Player 1'){
      markBox(i, gameState.currentTurn);
      humanVsComputer(i);
    }
  });
}

whoGoesFirst.addEventListener('click', function(){
  var element = event.target.className;
  var challenge = gameState.challenge;
  if (element === 'pick-game__player1-button' || element === 'pick-game__player2-button'){
    gameState.currentTurn = event.target.innerHTML;
    swapVisibility(whoGoesFirst, game);
    if (gameState.currentTurn === 'Computer'){
      humanVsComputer();
    }
    else if (challenge === "Human vs. Human" || challenge === "Human vs. Computer"){
      inPlayMessage(event.target.innerHTML + ' make your move!');
    }
  }
})

startGameButton.addEventListener("click", function(){ compVsComp() })

function addChallenge(challenge){
  gameState.challenge = challenge;
}

function addSymbol(symbol, player){
  gameState[player] = symbol;
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

function markBox(pos, player){
  box[pos].innerHTML = gameState[player];
};

function inPlayMessage(message){
  gameMessage.innerHTML = message
}

function addButtonText(button1, button2, challenge){
  if (challenge === "Human vs. Computer"){
    button2.innerHTML = 'Computer';
  }
  else if (challenge === "Computer vs. Computer") {
    button1.innerHTML = 'Computer 1';
    button2.innerHTML = 'Computer 2';
  }
}
