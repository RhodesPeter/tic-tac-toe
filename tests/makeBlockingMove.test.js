var test = require('tape');
var game = require('../public/index.js');

test('Testing that makeBlockingMove() returns the correct next position', function(t){
  var board = [' ', ' ', 'X', ' ', '.', ' ', 'X', ' ', ' '];
  t.equals(game.makeBlockingMove(board), 1, 'blockingPatterns[0][1] is returned when blockingPatterns[0][0] is matched');
  t.end();
});

test('Testing that makeBlockingMove() returns the correct next position', function(t){
  var board = [' ', 'X', 'X', '.', '.', '.', '.', '.', '.'];
  t.equals(game.makeBlockingMove(board), 0, 'blockingPatterns[1][1] is returned when blockingPatterns[1][0] is matched');
  t.end();
});

test('Testing that makeBlockingMove() returns the correct next position', function(t){
  var board = ['X', '.', '.', 'X', '.', '.', ' ', '.', '.'];
  t.equals(game.makeBlockingMove(board), 6, 'blockingPatterns[2][1] is returned when blockingPatterns[2][0] is matched');
  t.end();
});

test('Testing that makeBlockingMove() returns the correct next position', function(t){
  var board = ['.', '.', '.', '.', '.', '.', 'X', 'X', ' '];
  t.equals(game.makeBlockingMove(board), 8, 'blockingPatterns[3][1] is returned when blockingPatterns[3][0] is matched');
  t.end();
});

test('Testing that makeBlockingMove() returns the correct next position', function(t){
  var board = ['.', '.', ' ', '.', '.', 'X', '.', '.', 'X'];
  t.equals(game.makeBlockingMove(board), 2, 'blockingPatterns[4][1] is returned when blockingPatterns[4][0] is matched');
  t.end();
});

test('Testing that makeBlockingMove() returns the correct next position', function(t){
  var board = [' ', '.', '.', 'X', '.', '.', 'X', '.', '.'];
  t.equals(game.makeBlockingMove(board), 0, 'blockingPatterns[5][1] is returned when blockingPatterns[5][0] is matched');
  t.end();
});

test('Testing that makeBlockingMove() returns the correct next position', function(t){
  var board = ['.', '.', '.', '.', '.', '.', ' ', 'X', 'X'];
  t.equals(game.makeBlockingMove(board), 6, 'blockingPatterns[6][1] is returned when blockingPatterns[6][0] is matched');
  t.end();
});

test('Testing that makeBlockingMove() returns the correct next position', function(t){
  var board = ['.', '.', 'X', '.', '.', 'X', '.', '.', ' '];
  t.equals(game.makeBlockingMove(board), 8, 'blockingPatterns[7][1] is returned when blockingPatterns[7][0] is matched');
  t.end();
});

test('Testing that makeBlockingMove() returns the correct next position', function(t){
  var board = ['X', 'X', ' ', '.', '.', '.', '.', '.', '.'];
  t.equals(game.makeBlockingMove(board), 2, 'blockingPatterns[8][1] is returned when blockingPatterns[8][0] is matched');
  t.end();
});

test('Testing that makeBlockingMove() returns the correct next position', function(t){
  var board = ['.', '.', ' ', '.', 'X', '.', '.', '.', 'X'];
  t.equals(game.makeBlockingMove(board), 2, 'blockingPatterns[9][1] is returned when blockingPatterns[9][0] is matched');
  t.end();
});

test('Testing that makeBlockingMove() returns the correct next position', function(t){
  var board = ['.', '.', 'X', '.', 'X', '.', ' ', '.', '.'];
  t.equals(game.makeBlockingMove(board), 6, 'blockingPatterns[10][1] is returned when blockingPatterns[10][0] is matched');
  t.end();
});

test('Testing that makeBlockingMove() returns the correct next position', function(t){
  var board = ['X', '.', '.', '.', 'X', '.', '.', '.', ' '];
  t.equals(game.makeBlockingMove(board), 8, 'blockingPatterns[11][1] is returned when blockingPatterns[11][0] is matched');
  t.end();
});

test('Testing that makeBlockingMove() returns the correct next position', function(t){
  var board = ['.', '.', ' ', '.', 'X', '.', 'X', '.', '.'];
  t.equals(game.makeBlockingMove(board), 2, 'blockingPatterns[12][1] is returned when blockingPatterns[12][0] is matched');
  t.end();
});

test('Testing that makeBlockingMove() returns the correct next position', function(t){
  var board = ['X', ' ', 'X', '.', '.', '.', '.', '.', '.'];
  t.equals(game.makeBlockingMove(board), 1, 'blockingPatterns[13][1] is returned when blockingPatterns[13][0] is matched');
  t.end();
});

test('Testing that makeBlockingMove() returns the correct next position', function(t){
  var board = ['X', '.', '.', ' ', '.', '.', 'X', '.', '.'];
  t.equals(game.makeBlockingMove(board), 3, 'blockingPatterns[14][1] is returned when blockingPatterns[14][0] is matched');
  t.end();
});

test('Testing that makeBlockingMove() returns the correct next position', function(t){
  var board = ['.', '.', '.', '.', '.', '.', 'X', ' ', 'X'];
  t.equals(game.makeBlockingMove(board), 7, 'blockingPatterns[15][1] is returned when blockingPatterns[15][0] is matched');
  t.end();
});

test('Testing that makeBlockingMove() returns the correct next position', function(t){
  var board = ['.', '.', 'X', '.', '.', ' ', '.', '.', 'X'];
  t.equals(game.makeBlockingMove(board), 5, 'blockingPatterns[16][1] is returned when blockingPatterns[16][0] is matched');
  t.end();
});

test('Testing that makeBlockingMove() returns the correct next position', function(t){
  var board = ['.', ' ', '.', '.', 'X', '.', '.', 'X', '.'];
  t.equals(game.makeBlockingMove(board), 1, 'blockingPatterns[17][1] is returned when blockingPatterns[17][0] is matched');
  t.end();
});

test('Testing that makeBlockingMove() returns the correct next position', function(t){
  var board = ['.', '.', '.', ' ', 'X', 'X', '.', '.', '.'];
  t.equals(game.makeBlockingMove(board), 3, 'blockingPatterns[18][1] is returned when blockingPatterns[18][0] is matched');
  t.end();
});

test('Testing that makeBlockingMove() returns the correct next position', function(t){
  var board = ['.', 'X', '.', '.', 'X', '.', '.', ' ', '.'];
  t.equals(game.makeBlockingMove(board), 7, 'blockingPatterns[19][1] is returned when blockingPatterns[19][0] is matched');
  t.end();
});

test('Testing that makeBlockingMove() returns the correct next position', function(t){
  var board = ['.', '.', '.', 'X', 'X', ' ', '.', '.', '.'];
  t.equals(game.makeBlockingMove(board), 5, 'blockingPatterns[20][1] is returned when blockingPatterns[20][0] is matched');
  t.end();
});

test('Testing that makeBlockingMove() returns the correct next position', function(t){
  var board = [' ', 'X', ' ', 'X', '.', '.', ' ', '.', '.'];
  t.equals(game.makeBlockingMove(board), 0, 'blockingPatterns[21][1] is returned when blockingPatterns[21][0] is matched');
  t.end();
});

test('Testing that makeBlockingMove() returns the correct next position', function(t){
  var board = [' ', '.', '.', 'X', '.', '.', ' ', 'X', ' '];
  t.equals(game.makeBlockingMove(board), 6, 'blockingPatterns[22][1] is returned when blockingPatterns[22][0] is matched');
  t.end();
});

test('Testing that makeBlockingMove() returns the correct next position', function(t){
  var board = ['.', '.', ' ', '.', '.', 'X', ' ', 'X', ' '];
  t.equals(game.makeBlockingMove(board), 8, 'blockingPatterns[23][1] is returned when blockingPatterns[23][0] is matched');
  t.end();
});

test('Testing that makeBlockingMove() returns the correct next position', function(t){
  var board = [' ', 'X', ' ', '.', '.', 'X', '.', '.', ' '];
  t.equals(game.makeBlockingMove(board), 2, 'blockingPatterns[24][1] is returned when blockingPatterns[24][0] is matched');
  t.end();
});

test('Testing that makeBlockingMove() returns the correct next position', function(t){
  var board = [' ', ' ', 'X', 'X', '.', '.', ' ', '.', '.'];
  t.equals(game.makeBlockingMove(board), 0, 'blockingPatterns[25][1] is returned when blockingPatterns[25][0] is matched');
  t.end();
});

test('Testing that makeBlockingMove() returns the correct next position', function(t){
  var board = ['X', '.', '.', ' ', '.', '.', ' ', 'X', ' '];
  t.equals(game.makeBlockingMove(board), 6, 'blockingPatterns[26][1] is returned when blockingPatterns[26][0] is matched');
  t.end();
});

test('Testing that makeBlockingMove() returns the correct next position', function(t){
  var board = ['.', '.', ' ', '.', 'X', 'X', ' ', ' ', ' '];
  t.equals(game.makeBlockingMove(board), 8, 'blockingPatterns[27][1] is returned when blockingPatterns[27][0] is matched');
  t.end();
});

test('Testing that makeBlockingMove() returns the correct next position', function(t){
  var board = ['X', ' ', ' ', '.', '.', 'X', '.', '.', ' '];
  t.equals(game.makeBlockingMove(board), 2, 'blockingPatterns[28][1] is returned when blockingPatterns[28][0] is matched');
  t.end();
});

test('Testing that makeBlockingMove() returns the correct next position', function(t){
  var board = [' ', 'X', ' ', ' ', '.', '.', 'X', '.', '.'];
  t.equals(game.makeBlockingMove(board), 0, 'blockingPatterns[29][1] is returned when blockingPatterns[29][0] is matched');
  t.end();
});

test('Testing that makeBlockingMove() returns the correct next position', function(t){
  var board = [' ', '.', '.', 'X', '.', '.', ' ', ' ', 'X'];
  t.equals(game.makeBlockingMove(board), 6, 'blockingPatterns[30][1] is returned when blockingPatterns[30][0] is matched');
  t.end();
});

test('Testing that makeBlockingMove() returns the correct next position', function(t){
  var board = ['.', '.', 'X', '.', '.', ' ', ' ', 'X', ' '];
  t.equals(game.makeBlockingMove(board), 8, 'blockingPatterns[31][1] is returned when blockingPatterns[31][0] is matched');
  t.end();
});

test('Testing that makeBlockingMove() returns the correct next position', function(t){
  var board = ['X', ' ', ' ', '.', '.', 'X', '.', '.', ' '];
  t.equals(game.makeBlockingMove(board), 2, 'blockingPatterns[32][1] is returned when blockingPatterns[32][0] is matched');
  t.end();
});
