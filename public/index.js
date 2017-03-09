"use strict";

var gameState = {
    board : [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    player1 : '',
    player2 : 'H',
    challenge : '',
    round : 1,
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
    if (currentTurn === 'player1'){
      markBox(box[0]);
      startGame();
    }
  });

  box[1].addEventListener("click", function() {
    if (currentTurn === 'player1'){
      markBox(box[1]);
      gameState.clickedPosition = 1;
      startGame();
    }
  });

  box[2].addEventListener("click", function() {
    if (currentTurn === 'player1'){
      markBox(box[2]);
      gameState.clickedPosition = 2;
      startGame();
    }
  });

  box[3].addEventListener("click", function() {
    if (currentTurn === 'player1'){
      markBox(box[3]);
      gameState.clickedPosition = 3;
      startGame();
    }
  });

  box[4].addEventListener("click", function() {
    if (currentTurn === 'player1'){
      markBox(box[4]);
      gameState.clickedPosition = 4;
      startGame();
    }
  });

  box[5].addEventListener("click", function() {
    if (currentTurn === 'player1'){
      markBox(box[5]);
      gameState.clickedPosition = 5;
      startGame();
    }
  });

  box[6].addEventListener("click", function() {
    if (currentTurn === 'player1'){
      markBox(box[6]);
      gameState.clickedPosition = 6;
      startGame();
    }
  });

  box[7].addEventListener("click", function() {
    if (currentTurn === 'player1'){
      markBox(box[7]);
      gameState.clickedPosition = 7;
      startGame();
    }
  });

  box[8].addEventListener("click", function() {
    if (currentTurn === 'player1'){
      markBox(box[8]);
      gameState.clickedPosition = 8;
      startGame();
    }
  });

})();


function markBox(box){
  box.innerHTML = gameState.player1;
};

var round = 1;

function startMessage(){
  console.log("Click a square to make your first move!"); // log this to screen
}

var startGame = function(){

  logRound();
  var board = gameState.board;

  if(makeMove(gameState.clickedPosition, 'player1')){
    if(hasSomeoneWon(gameState.board)[0] || isBoardFilled(board)) {
      endGame();
    }
    findNextMove(board);
    if(hasSomeoneWon(board)[0] || isBoardFilled(board)) {
      endGame();
    } else {
      logBoardToConsole(board);
    }
  }

};

var logRound = function(){
  console.log('  Round ' + round); // print this on screen
  round++
};

var makeMove = function(pos, player){
  var play = gameState[currentTurn];
  if(player !== currentTurn){return false;}
  if(pos >= 0 && pos <= 8 && !isNaN(pos) && gameState.board[pos] === ' '){
    gameState.board.splice(pos, 1, play);
    currentTurn = (currentTurn === 'player1') ? 'player2' : 'player1';
    return true;
  }
  return false;
};

// if the board matches a pattern from hasWonPatterns, return the winner
var hasSomeoneWon = function(board){
  var board_string = gameState.board.join('');
  var theWinner = null;
  for(var i = 0;i < hasWonPatterns.length;i++){
    var array = board_string.match(hasWonPatterns[i][0]);
    if(array){
      theWinner = hasWonPatterns[i][1];
    }
  }
  if(theWinner){
    logBoardToConsole();
    console.log('Game over.', theWinner, 'is the winner!');
    return [true, theWinner];
  }
  return [false, null];
};

// return true if the board is filled
var isBoardFilled = function(){
  if(gameState.board.indexOf(' ') === -1){
    console.log("Game over, it's a draw!");
    return true;
  }
  return false;
};

// this searches winningMovePatterns then blockingPatterns and if there is no
// match run defaultMove()
var findNextMove = function(board){
  var nextPos = makeWinningMove(board);
  if(nextPos === -1){
    nextPos = makeBlockingMove(board);
    if(nextPos === -1){
      nextPos = defaultMove(board);
    }
  }
  makeMove(nextPos, gameState.player2);
};

// return the next move by matching a pattern from winningMovePatterns and returning the number
// (the second value in the array)
var makeWinningMove = function(board){
  var board_string = board.join('');
  for(var i = 0;i < winningMovePatterns.length;i++){
    var array = board_string.match(winningMovePatterns[i][0]);
    if(array){ // this is only truthy when someone wins
      return winningMovePatterns[i][1];
    }
  }
  return -1;
};

// return the next move by matching a pattern from winningMovePatterns and returning the number
// (the second value in the array)
var makeBlockingMove = function(board){
  var board_string = board.join('');
  for(var i = 0;i < blockingPatterns.length;i++){
    var array = board_string.match(blockingPatterns[i][0]);
      if(array){return blockingPatterns[i][1];}
  }
  return -1;
};

// if the center of board is free, go there, if not go to position 0
var defaultMove = function(board){
  return board[4] === ' ' ? 4 : board.indexOf(' ');
};

var logBoardToConsole = function(board){
  console.log(board_display(board));
};

var board_display = function(board){
  return ' '+board[0]+' |'+' '+board[1]+' |'+' '+board[2]+'\n===+===+===\n'+' '+
             board[3]+' |'+' '+board[4]+' |'+' '+board[5]+'\n===+===+===\n'+' '+
             board[6]+' |'+' '+board[7]+' |'+' '+board[8];
};
