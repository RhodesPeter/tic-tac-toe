"use strict";

var gameState = {
  board : [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  player1 : '',
  player2 : '',
  challenge : '',
  currentTurn : 'player1'
};

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

function startMessage(){
 console.log("Click a square to make your first move!");
};

function findNextMove(board){
 var nextPos = makeWinningMove(board);
 if(nextPos === -1){
   nextPos = makeBlockingMove(board);
   if(nextPos === -1){
     nextPos = defaultMove(board);
   }
 }
 return nextPos
};

function makeMove(pos, symbol){
 if(gameState.board[pos] === ' '){
   gameState.board.splice(pos, 1, symbol);
   gameState.currentTurn = (gameState.currentTurn === 'player1') ? 'player2' : 'player1';
   logBoardToConsole(gameState.board);
 }
};

function mapSymbolToPatterns(boardArray){
 var boardConvertedToOXforComparison = boardArray.join('');

 var replace = gameState.player1;
 var pattern = new RegExp(replace,"g");
 var strForComparison = boardConvertedToOXforComparison.replace(pattern, "-");

 var replace2 = gameState.player2;
 var pattern2 = new RegExp(replace2,"g");
 strForComparison = strForComparison.replace(pattern2, "O");

 var replace3 = '-';
 var pattern3 = new RegExp(replace3,"g");
 strForComparison = strForComparison.replace(pattern3, "X");

 return strForComparison;
};

// if the board matches a pattern from hasWonPatterns, return the winner
function hasSomeoneWon(){
 var boardString = mapSymbolToPatterns(gameState.board);
 var theWinner = null;

 for(var i = 0;i < hasWonPatterns.length;i++){
   var array = boardString.match(hasWonPatterns[i][0]);
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

function isBoardFilled (){
 if(gameState.board.indexOf(' ') === -1){
   console.log("Game over, it's a draw!");
   return true;
 }
 return false;
};

// return the next move by matching a pattern from winningMovePatterns
function makeWinningMove(board){
 var boardString = mapSymbolToPatterns(gameState.board);

 for(var i = 0;i < winningMovePatterns.length;i++){
   var array = boardString.match(winningMovePatterns[i][0]);
   if(array){
     return winningMovePatterns[i][1];
   }
 }
 return -1;
};

// return the next move by matching a pattern from winningMovePatterns
function makeBlockingMove(board){
 var boardString = mapSymbolToPatterns(gameState.board);

 for(var i = 0; i < blockingPatterns.length; i++){
   var array = boardString.match(blockingPatterns[i][0]);
     if(array){
       return blockingPatterns[i][1];
     }
 }
 return -1;
};

// if the center of board is free, go there, if not go to position 0
function defaultMove(board){
 return board[4] === ' ' ? 4 : board.indexOf(' ');
};

function logBoardToConsole(board){
 console.log(boardDisplay(board));
};

function boardDisplay(board){
 return ' '+board[0]+' |'+' '+board[1]+' |'+' '+board[2]+'\n===+===+===\n'+' '+
            board[3]+' |'+' '+board[4]+' |'+' '+board[5]+'\n===+===+===\n'+' '+
            board[6]+' |'+' '+board[7]+' |'+' '+board[8];
};

function humanVsComputer(pos){
 if (gameState.player1 === 'O'){ gameState.player2 = 'X'; }
 else { gameState.player2 = 'O' };

 makeMove(pos, gameState[gameState.currentTurn]);
 hasSomeoneWon()[0];
 if (isBoardFilled()){ return; };

 setTimeout(function(){
   var nextPos = findNextMove(gameState.board);
   makeMove(nextPos, gameState[gameState.currentTurn])
   hasSomeoneWon()[0];
 }, 400);

 if (isBoardFilled()){ return; };
};

function humanVsHuman(pos){
 makeMove(pos, gameState[gameState.currentTurn]);
 hasSomeoneWon()[0];
 if (isBoardFilled()){ return; };
}

// setTimeout to delay the computer's response
function compVsComp(){
 gameState.player1 = 'X';
 gameState.player2 = 'O',
 setTimeout(function(){
   var nextPos = findNextMove(gameState.board);
   makeMove(nextPos, gameState[gameState.currentTurn]);
   if (hasSomeoneWon()[0]){ return; }
   if (isBoardFilled()){ return };
   compVsComp();
 }, 400);
};