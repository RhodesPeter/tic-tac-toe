"use strict";

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

var board = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '];
var player1 = 'X';
var player2 = 'O';
var curr_turn = player1;

// this searches winningMovePatterns then blockingPatterns and if there is no
// match run firstMove (which is the first computer move)
var findNextMove = function(){
  var x = makeWinningMove(board);
  if(x === -1){
    x = makeBlockingMove(board);
    if( x === -1){
      x = firstMove();
    }
  }
  move(x,player2);
};

// this function makes the computers move
var move = function(pos,x){
  if(x != curr_turn){return false;}
  if(+pos>=0 && +pos<=8 && !isNaN(+pos) && board[+pos] === ' '){
    board.splice(+pos,1,x);
    curr_turn = (x === player1) ? player2 : player1;
    return true;
  }
  return false;
};

var board_display = function(){
  return ' '+board[0]+' |'+' '+board[1]+' |'+' '+board[2]+'\n===+===+===\n'+' '+
             board[3]+' |'+' '+board[4]+' |'+' '+board[5]+'\n===+===+===\n'+' '+
             board[6]+' |'+' '+board[7]+' |'+' '+board[8];
};

var logBoardToConsole = function(){
  console.log(board_display());
};

// return true if the board is filled
var isBoardFilled = function(){
  if(board.indexOf(' ') === -1){
    logBoardToConsole();
    console.log('Game over');
    return true;
  }
  return false;
};

// if the board matches a pattern from hasWonPatterns, return the winner
var winner = function(board){
  var board_string = board.join('');
  var the_winner = null;
  for(var i = 0;i < hasWonPatterns.length;i++){
    var array = board_string.match(hasWonPatterns[i][0]);
    if(array){
      the_winner = hasWonPatterns[i][1];
    }
  }
  if(the_winner){
    logBoardToConsole();
    console.log('Game over');
    // console.log('Game over.', the_winner, 'is the winner!') Add this after tests
    return [true, the_winner];
  }
  return [false, null];
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
var firstMove = function(){
  return board[4] === ' ' ? 4 : board.indexOf(' ');
};

var endGame = function(){
  process.exit();
};

var startGame = function(){
  logBoardToConsole();
  console.log("Enter [0-8]:");
  process.openStdin().on('data',function(res){
    if(move(res, player1)){
      if(winner(board)[0] || isBoardFilled()) {
        endGame();
      } else {
        findNextMove();
        if (winner(board)[0] || isBoardFilled()) {
          endGame();
        } else {
          logBoardToConsole();
        }
      }
    }
  });
};

startGame();

// exports needed for tests
module.exports = {
  makeWinningMove : makeWinningMove,
  makeBlockingMove : makeBlockingMove,
  winner : winner
};
