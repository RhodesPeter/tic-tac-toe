"use strict";

// these patterns are regex
var patterns_1 = [ // make this move to win
                  [(/ OO....../),0],[(/O..O.. ../),6],[(/......OO /),8],
                  [(/.. ..O..O/),2],[(/ ..O..O../),0],[(/...... OO/),6],
                  [(/..O..O.. /),8],[(/OO ....../),2],[(/ ...O...O/),0],
                  [(/..O.O. ../),6],[(/O...O... /),8],[(/.. .O.O../),2],
                  [(/O O....../),1],[(/O.. ..O../),3],[(/......O O/),7],
                  [(/..O.. ..O/),5],[(/. ..O..O./),1],[(/... OO.../),3],
                  [(/.O..O.. ./),7],[(/...OO .../),5]
                 ];

var patterns_2 = [ // move to block a win
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

var patterns_3 = [ // if this pattern matches then the second value is the winner
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

// this searches patterns_1 then patterns_2 and if there is no match run firstMove
// (which is the first computer move)
var comp = function(){
  var x = get_pattern_1_move(board);
  if(x === -1){
    x = get_pattern_2_move(board);
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

var show = function(){
  console.log(board_display());
};

// return true if the board is filled
var board_filled = function(){
  var x = firstMove(); //rename this variable?
  if(x === -1){
    show();
    console.log('Game over');
    return true;
  }
  return false;
};

// if the board matches a pattern from patterns_3, return the winner
var winner = function(board){
  var board_string = board.join('');
  var the_winner = null;
  for(var i = 0;i < patterns_3.length;i++){
    var array = board_string.match(patterns_3[i][0]);
    if(array){
      the_winner = patterns_3[i][1];
    }
  }
  if(the_winner){
    show();
    console.log('Game over');
    // console.log('Game over.', the_winner, 'is the winner!') Add this after tests
    return [true, the_winner];
  }
  return [false, null];
};

// return the next move by matching a pattern from patterns_1 and returning the number
// (the second value in the array)
var get_pattern_1_move = function(board){
  var board_string = board.join('');
  for(var i = 0;i < patterns_1.length;i++){
    var array = board_string.match(patterns_1[i][0]);
    if(array){ // this is only truthy when someone wins
      return patterns_1[i][1];
    }
  }
  return -1;
};

// return the next move by matching a pattern from patterns_1 and returning the number
// (the second value in the array)
var get_pattern_2_move = function(board){
  var board_string = board.join('');
  for(var i = 0;i < patterns_2.length;i++){
    var array = board_string.match(patterns_2[i][0]);
      if(array){return patterns_2[i][1];}
  }
  return -1;
};

// if the center of board is free, go there, if not go to the first free space
// this is only on the first move
var firstMove = function(){
  if(board[4] === ' '){
    return 4;
  }
  return board.indexOf(' ');
};

var exit = function(){
  process.exit();
};

var play = function(){
  show();
  console.log("Enter [0-8]:");
  process.openStdin().on('data',function(res){
    if(move(res, player1)){
      if(winner(board)[0] || board_filled()) {
        exit();
      } else {
        comp();
        if (winner(board)[0] || board_filled()) {
          exit();
        } else {
          show();
        }
      }
    }
  });
};

play();

// exports needed for tests
module.exports = {
  get_pattern_1_move : get_pattern_1_move,
  get_pattern_2_move : get_pattern_2_move,
  winner : winner
};
