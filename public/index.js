"use strict";

var gameState = {
    board : [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    player1 : '',
    player2 : 'O',
    challenge : '',
    clickedPosition : ''
}

var currentTurn = 'player1';

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

    if (gameState.player1 === '' && gameState.challenge === 'Human vs. Human'){
      addSymbol(symbol, 'player1');
      player.innerHTML = 'Player 2';
    }
    else if (gameState.player1 === ''){
      addSymbol(symbol, 'player1');
      swapVisibility(symbolContainer, game);
      startMessage()
    }
    else if (gameState.player1 === symbol){
      player.innerHTML = 'That symbol has been taken!';
    }
    else {
      addSymbol(symbol, 'player2');
      swapVisibility(symbolContainer, game);
      startMessage()
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

    if (challenge === 'Computer vs. Computer'){
        var startGameButton = document.getElementsByClassName('game__start-button')[0];
        show(startGameButton);
    }

    swapVisibility(challengeContainer, symbolContainer);
    addChallenge(challenge);
  });
}

var startGameButton = document.getElementsByClassName('game__start-button')[0];
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
