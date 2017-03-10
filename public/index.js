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

  var box = document.getElementsByClassName("box");

  box[0].addEventListener("click", function() {
    if (gameState.challenge === 'Human vs. Human'){
      gameState.clickedPosition = 0;
      startGame(gameState.clickedPosition);
    }
    else if (currentTurn === 'player1'){
      gameState.clickedPosition = 0;
      startGame(gameState.clickedPosition);
    }
  });

  box[1].addEventListener("click", function() {
    if (gameState.challenge === 'Human vs. Human'){
      gameState.clickedPosition = 1;
      startGame(gameState.clickedPosition);
    } else if (currentTurn === 'player1'){
      gameState.clickedPosition = 1;
      startGame(gameState.clickedPosition);
    }
  });

  box[2].addEventListener("click", function() {
    if (gameState.challenge === 'Human vs. Human'){
      gameState.clickedPosition = 2;
      startGame(gameState.clickedPosition);
    }
    else if (currentTurn === 'player1'){
      gameState.clickedPosition = 2;
      startGame(gameState.clickedPosition);
    }
  });

  box[3].addEventListener("click", function() {
    if (gameState.challenge === 'Human vs. Human'){
      gameState.clickedPosition = 3;
      startGame(gameState.clickedPosition);
    }
    else if (currentTurn === 'player1'){
      gameState.clickedPosition = 3;
      startGame(gameState.clickedPosition);
    }
  });

  box[4].addEventListener("click", function() {
    if (gameState.challenge === 'Human vs. Human'){
      gameState.clickedPosition = 4;
      startGame(gameState.clickedPosition);
    }
    else if (currentTurn === 'player1'){
      gameState.clickedPosition = 4;
      startGame(gameState.clickedPosition);
    }
  });

  box[5].addEventListener("click", function() {
    if (gameState.challenge === 'Human vs. Human'){
      gameState.clickedPosition = 5;
      startGame(gameState.clickedPosition);
    }
    else if (currentTurn === 'player1'){
      gameState.clickedPosition = 5;
      startGame(gameState.clickedPosition);
    }
  });

  box[6].addEventListener("click", function() {
    if (gameState.challenge === 'Human vs. Human'){
      gameState.clickedPosition = 6;
      startGame(gameState.clickedPosition);
    }
    else if (currentTurn === 'player1'){
      gameState.clickedPosition = 6;
      startGame(gameState.clickedPosition);
    }
  });

  box[7].addEventListener("click", function() {
    if (gameState.challenge === 'Human vs. Human'){
      gameState.clickedPosition = 7;
      startGame(gameState.clickedPosition);
    }
    else if (currentTurn === 'player1'){
      gameState.clickedPosition = 7;
      startGame(gameState.clickedPosition);
    }
  });

  box[8].addEventListener("click", function() {
    if (gameState.challenge === 'Human vs. Human'){
      gameState.clickedPosition = 8;
      startGame(gameState.clickedPosition);
    }
    else if (currentTurn === 'player1'){
      gameState.clickedPosition = 8;
      startGame(gameState.clickedPosition);
    };
  });

function markBox(pos, player){
  box[pos].innerHTML = gameState[player];
};

function startMessage(){
  console.log("Click a square to make your first move!"); // log this to screen
};

var startGame = function(pos){
  console.log(gameState.player1, gameState.player2);
  console.log(currentTurn);

  if (gameState.player1 === 'O'){
    gameState.player1 = 'X';
    gameState.player2 = 'O';
  }

  makeMove(pos, gameState[currentTurn]);
  hasSomeoneWon()[0];

  if (isBoardFilled()){
    return;
  };

  // return out of function so that the computer doesn't play join game.
  if (gameState.challenge === 'Human vs. Human'){
    return;
  };

  setTimeout(function(){
    findNextMove(gameState.board);
    hasSomeoneWon()[0];
  }, 500);

  if (isBoardFilled()){
    return;
  };

  if(gameState.challenge === 'Computer vs. Computer'){
    startGame();
  }
};

function compVsComp(){

  setTimeout(function(){
    findNextMove(gameState.board);
    if (hasSomeoneWon()[0]){ return; }
    if (isBoardFilled()){ return; }
    compVsComp();
  }, 500);

};

var makeMove = function(pos, symbol){
  if(gameState.board[pos] === ' '){
    gameState.board.splice(pos, 1, symbol);
    currentTurn = (currentTurn === 'player1') ? 'player2' : 'player1';
    logBoardToConsole(gameState.board);
    console.log(gameState.board);
  }
};

// this searches winningMovePatterns then blockingPatterns and if there is no
// match run defaultMove()
var findNextMove = function(board){
  var nextPos = makeWinningMove(board);
  console.log(nextPos, 'winning move');
  if(nextPos === -1){
    nextPos = makeBlockingMove(board);
    console.log(nextPos, 'blocking move');
    if(nextPos === -1){
      nextPos = defaultMove(board);
      console.log(nextPos, 'default move');
    }
  }
  makeMove(nextPos, gameState[currentTurn]);
};

function mapSymbolToPatterns(str){
  var replace = gameState.player1;
  var symbol = new RegExp(replace,"g");
  str = str.replace(symbol, "X");
  return str;
};

// if the board matches a pattern from hasWonPatterns, return the winner
var hasSomeoneWon = function(){
  var board_string = gameState.board.join('');
  var board_string = mapSymbolToPatterns(board_string);

  var theWinner = null;
  for(var i = 0;i < hasWonPatterns.length;i++){
    var array = board_string.match(hasWonPatterns[i][0]);
    if(array){
      theWinner = hasWonPatterns[i][1];
    }
  }
  if(theWinner){
    var board = gameState.board
    logBoardToConsole(board);
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

// return the next move by matching a pattern from winningMovePatterns and returning the number
// (the second value in the array)
var makeWinningMove = function(board){
  var board_string = board.join('');
  var board_string = mapSymbolToPatterns(board_string);

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
  var board_string = mapSymbolToPatterns(board_string);

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
