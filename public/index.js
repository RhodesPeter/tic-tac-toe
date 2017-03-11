"use strict";

var game = document.getElementsByClassName("game")[0];
var challengeContainer = document.getElementsByClassName("pick-game__container")[0];
var symbolContainer = document.getElementsByClassName("pick-game__symbol-container")[0];
var pickChallenge = document.getElementsByClassName("pick-game__challenge");
var symbolButtons = document.getElementsByClassName("pick-game__symbol");
var player = document.getElementsByClassName("player")[0];
var box = document.getElementsByClassName("box");
var startGameButton = document.getElementsByClassName('game__start-button')[0];

for(var i = 0; i < pickChallenge.length; i++) {
  addListenerToChallengeButtons();
}

function addListenerToChallengeButtons(){
  pickChallenge[i].addEventListener("click", function() {
    var challenge = event.target.innerHTML;
    addChallenge(challenge);
    if (challenge === 'Computer vs. Computer'){
      swapVisibility(challengeContainer, game);
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
    if (gameState.player1 === '' && gameState.challenge === 'Human vs. Human'){
      addSymbol(symbol, 'player1');
      player.innerHTML = 'Player 2';
    }
    else if (gameState.player1 === ''){
      addSymbol(symbol, 'player1');
      swapVisibility(symbolContainer, game);
      startMessage();
    }
    else if (gameState.player1 === symbol){
      player.innerHTML = 'That symbol has been taken!';
    }
    else {
      addSymbol(symbol, 'player2');
      swapVisibility(symbolContainer, game);
      startMessage();
    }
  });
}

for(var i = 0; i < box.length; i++) {
  addListenersToBoxes(i);
}

function addListenersToBoxes(i){
  box[i].addEventListener("click", function() {
    if (gameState.board[i] !== ' '){
      return
    }
    else if (gameState.challenge === 'Human vs. Human'){
      humanVsHuman(i);
    }
    else if (gameState.currentTurn === 'player1'){
      humanVsComputer(i);
    }
  });
}

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
