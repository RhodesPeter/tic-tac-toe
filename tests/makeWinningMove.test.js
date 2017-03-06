var test = require('tape');
var game = require('../game.js');

test('Testing that makeWinningMove() returns the correct next position', function(t){
  var board = [' ', 'O', 'O', '.', '.', '.', '.', '.', '.'];
  t.equals(game.makeWinningMove(board), 0, 'winningMovePatterns[0][1] is returned when winningMovePatterns[0][0] is matched');
  t.end();
});

test('Testing that makeWinningMove() returns the correct next position', function(t){
  var board = ['O', '.', '.', 'O', '.', '.', ' ', '.', '.'];
  t.equals(game.makeWinningMove(board), 6, 'winningMovePatterns[1][1] is returned when winningMovePatterns[1][0] is matched');
  t.end();
});

test('Testing that makeWinningMove() returns the correct next position', function(t){
  var board = ['.', '.', '.', '.', '.', '.', 'O', 'O', ' '];
  t.equals(game.makeWinningMove(board), 8, 'winningMovePatterns[2][1] is returned when winningMovePatterns[2][0] is matched');
  t.end();
});

test('Testing that makeWinningMove() returns the correct next position', function(t){
  var board = ['.', '.', ' ', '.', '.', 'O', '.', '.', 'O'];
  t.equals(game.makeWinningMove(board), 2, 'winningMovePatterns[3][1] is returned when winningMovePatterns[3][0] is matched');
  t.end();
});

test('Testing that makeWinningMove() returns the correct next position', function(t){
  var board = [' ', '.', '.', 'O', '.', '.', 'O', '.', '.'];
  t.equals(game.makeWinningMove(board), 0, 'winningMovePatterns[4][1] is returned when winningMovePatterns[4][0] is matched');
  t.end();
});

test('Testing that makeWinningMove() returns the correct next position', function(t){
  var board = ['.', '.', '.', '.', '.', '.', ' ', 'O', 'O'];
  t.equals(game.makeWinningMove(board), 6, 'winningMovePatterns[5][1] is returned when winningMovePatterns[5][0] is matched');
  t.end();
});

test('Testing that makeWinningMove() returns the correct next position', function(t){
  var board = ['.', '.', 'O', '.', '.', 'O', '.', '.', ' '];
  t.equals(game.makeWinningMove(board), 8, 'winningMovePatterns[6][1] is returned when winningMovePatterns[6][0] is matched');
  t.end();
});

test('Testing that makeWinningMove() returns the correct next position', function(t){
  var board = ['O', 'O', ' ', '.', '.', '.', '.', '.', '.'];
  t.equals(game.makeWinningMove(board), 2, 'winningMovePatterns[7][1] is returned when winningMovePatterns[7][0] is matched');
  t.end();
});

test('Testing that makeWinningMove() returns the correct next position', function(t){
  var board = [' ', '.', '.', '.', 'O', '.', '.', '.', 'O'];
  t.equals(game.makeWinningMove(board), 0, 'winningMovePatterns[8][1] is returned when winningMovePatterns[8][0] is matched');
  t.end();
});

test('Testing that makeWinningMove() returns the correct next position', function(t){
  var board = ['.', '.', 'O', '.', 'O', '.', ' ', '.', '.'];
  t.equals(game.makeWinningMove(board), 6, 'winningMovePatterns[9][1] is returned when winningMovePatterns[9][0] is matched');
  t.end();
});

test('Testing that makeWinningMove() returns the correct next position', function(t){
  var board = ['O', '.', '.', '.', 'O', '.', '.', '.', ' '];
  t.equals(game.makeWinningMove(board), 8, 'winningMovePatterns[10][1] is returned when winningMovePatterns[10][0] is matched');
  t.end();
});

test('Testing that makeWinningMove() returns the correct next position', function(t){
  var board = ['.', '.', ' ', '.', 'O', '.', 'O', '.', '.'];
  t.equals(game.makeWinningMove(board), 2,'winningMovePatterns[11][1] is returned when winningMovePatterns[11][0] is matched');
  t.end();
});

test('Testing that makeWinningMove() returns the correct next position', function(t){
  var board = ['O', ' ', 'O', '.', '.', '.', '.', '.', '.'];
  t.equals(game.makeWinningMove(board), 1, 'winningMovePatterns[12][1] is returned when winningMovePatterns[12][0] is matched');
  t.end();
});

test('Testing that makeWinningMove() returns the correct next position', function(t){
  var board = ['O', '.', '.', ' ', '.', '.', 'O', '.', '.'];
  t.equals(game.makeWinningMove(board), 3, 'winningMovePatterns[13][1] is returned when winningMovePatterns[13][0] is matched');
  t.end();
});

test('Testing that makeWinningMove() returns the correct next position', function(t){
  var board = ['.', '.', '.', '.', '.', '.', 'O', ' ', 'O'];
  t.equals(game.makeWinningMove(board), 7, 'winningMovePatterns[14][1] is returned when winningMovePatterns[14][0] is matched');
  t.end();
});

test('Testing that makeWinningMove() returns the correct next position', function(t){
  var board = ['.', '.', 'O', '.', '.', ' ', '.', '.', 'O'];
  t.equals(game.makeWinningMove(board), 5, 'winningMovePatterns[15][1] is returned when winningMovePatterns[15][0] is matched');
  t.end();
});

test('Testing that makeWinningMove() returns the correct next position', function(t){
  var board = ['.', ' ', '.', '.', 'O', '.', '.', 'O', '.'];
  t.equals(game.makeWinningMove(board), 1, 'winningMovePatterns[16][1] is returned when winningMovePatterns[16][0] is matched');
  t.end();
});

test('Testing that makeWinningMove() returns the correct next position', function(t){
  var board = ['.', '.', '.', ' ', 'O', 'O', '.', '.', '.'];
  t.equals(game.makeWinningMove(board), 3, 'winningMovePatterns[17][1] is returned when winningMovePatterns[17][0] is matched');
  t.end();
});

test('Testing that makeWinningMove() returns the correct next position', function(t){
  var board = ['.', 'O', '.', '.', 'O', '.', '.', ' ', '.'];
  t.equals(game.makeWinningMove(board), 7, 'winningMovePatterns[18][1] is returned when winningMovePatterns[18][0] is matched');
  t.end();
});

test('Testing that makeWinningMove() returns the correct next position', function(t){
  var board = ['.', '.', '.', 'O', 'O', ' ', '.', '.', '.'];
  t.equals(game.makeWinningMove(board), 5, 'winningMovePatterns[19][1] is returned when winningMovePatterns[19][0] is matched');
  t.end();
});
