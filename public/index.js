"use strict";

var gameState = {
    board : [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    player1 : '',
    player2 : '',
    challenge : '',
    currentTurn : 'player1',
    round : 1,
}

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
    }
    else if (gameState.player1 === symbol){
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

/////////////////////////////game logic below //////////////////////////////////

// regex matches if current player is 1 move away from winning & supplies winning move
var winningMovePatterns = [
                           [(/ OO....../),0],[(/O..O.. ../),6],[(/......OO /),8],
                           [(/.. ..O..O/),2],[(/ ..O..O../),0],[(/...... OO/),6],
                           [(/..O..O.. /),8],[(/OO ....../),2],[(/ ...O...O/),0],
                           [(/..O.O. ../),6],[(/O...O... /),8],[(/.. .O.O../),2],
                           [(/O O....../),1],[(/O.. ..O../),3],[(/......O O/),7],
                           [(/..O.. ..O/),5],[(/. ..O..O./),1],[(/... OO.../),3],
                           [(/.O..O.. ./),7],[(/...OO .../),5]
                          ];

// regex matches if opponent is 1 move away from winning & supplies blocking move
var blockingPatterns = [
                        [(/  X . X  /),1],[(/ XX....../),0],[(/X..X.. ../),6],
                        [(/......XX /),8],[(/.. ..X..X/),2],[(/ ..X..X../),0],
                        [(/...... XX/),6],[(/..X..X.. /),8],[(/XX ....../),2],
                        [(/.. .X...X/),2],[(/..X.X. ../),6],[(/X...X... /),8],
                        [(/.. .X.X../),2],[(/X X....../),1],[(/X.. ..X../),3],
                        [(/......X X/),7],[(/..X.. ..X/),5],[(/. ..X..X./),1],
                        [(/... XX.../),3],[(/.X..X.. ./),7],[(/...XX .../),5],
                        [(/ X X.. ../),0],[(/ ..X.. X /),6],[(/.. ..X X /),8],
                        [(/ X ..X.. /),2],[(/  XX.. ../),0],[(/X.. .. X /),6],
                        [(/.. .XX   /),8],[(/X  ..X.. /),2],[(/ X  ..X../),0],
                        [(/ ..X..  X/),6],[(/..X..  X /),8],[(/X  ..X.. /),2]
                       ];

// regex matches if a player has won & supplies the winning player
var hasWonPatterns = [
                      [(/OOO....../),'O'],[(/...OOO.../),'O'],[(/......OOO/),'O'],
                      [(/O..O..O../),'O'],[(/.O..O..O./),'O'],[(/..O..O..O/),'O'],
                      [(/O...O...O/),'O'],[(/..O.O.O../),'O'],[(/XXX....../),'X'],
                      [(/...XXX.../),'X'],[(/......XXX/),'X'],[(/X..X..X../),'X'],
                      [(/.X..X..X./),'X'],[(/..X..X..X/),'X'],[(/X...X...X/),'X'],
                      [(/..X.X.X../),'X']
                     ];

(function(){
  var box = document.getElementsByClassName("box");

  box[0].addEventListener("click", function() {
      box[0].innerHTML = gameState.player1;
  });

  box[1].addEventListener("click", function() {
      box[1].innerHTML = gameState.player1;
  });

  box[2].addEventListener("click", function() {
      box[2].innerHTML = gameState.player1;
  });

  box[3].addEventListener("click", function() {
      box[3].innerHTML = gameState.player1;
  });

  box[4].addEventListener("click", function() {
      box[4].innerHTML = gameState.player1;
  });

  box[5].addEventListener("click", function() {
      box[5].innerHTML = gameState.player1;
  });

  box[6].addEventListener("click", function() {
      box[6].innerHTML = gameState.player1;
  });

  box[7].addEventListener("click", function() {
      box[7].innerHTML = gameState.player1;
  });

  box[8].addEventListener("click", function() {
      box[8].innerHTML = gameState.player1;
  });

  box[9].addEventListener("click", function() {
      box[9].innerHTML = gameState.player1;
  });

})();
