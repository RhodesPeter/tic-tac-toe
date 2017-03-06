var test = require('tape');
var game = require('../game.js');

test('First test here: ', function(t){
  t.pass('testing that everything works');
  t.end();
});

test('Testing that get_pattern_1_move() returns the correct next position', function(t){
  var board = [' ', 'O', 'O', '.', '.', '.', '.', '.', '.'];
  t.equals(game.get_pattern_1_move(board), 0, 'patterns_1[0][1] is returned when pattern_1[0][0] is matched');
  t.end();
});

test('Testing that get_pattern_1_move() returns the correct next position', function(t){
  var board = ['O', '.', '.', 'O', '.', '.', ' ', '.', '.'];
  t.equals(game.get_pattern_1_move(board), 6, 'patterns_1[1][1] is returned when pattern_1[1][0] is matched');
  t.end();
});

test('Testing that get_pattern_1_move() returns the correct next position', function(t){
  var board = ['.', '.', '.', '.', '.', '.', 'O', 'O', ' '];
  t.equals(game.get_pattern_1_move(board), 8, 'patterns_1[2][1] is returned when pattern_1[2][0] is matched');
  t.end();
});

test('Testing that get_pattern_1_move() returns the correct next position', function(t){
  var board = ['.', '.', ' ', '.', '.', 'O', '.', '.', 'O'];
  t.equals(game.get_pattern_1_move(board), 2, 'patterns_1[3][1] is returned when pattern_1[3][0] is matched');
  t.end();
});

test('Testing that get_pattern_1_move() returns the correct next position', function(t){
  var board = [' ', '.', '.', 'O', '.', '.', 'O', '.', '.'];
  t.equals(game.get_pattern_1_move(board), 0, 'patterns_1[4][1] is returned when pattern_1[4][0] is matched');
  t.end();
});

test('Testing that get_pattern_1_move() returns the correct next position', function(t){
  var board = ['.', '.', '.', '.', '.', '.', ' ', 'O', 'O'];
  t.equals(game.get_pattern_1_move(board), 6, 'patterns_1[5][1] is returned when pattern_1[5][0] is matched');
  t.end();
});

test('Testing that get_pattern_1_move() returns the correct next position', function(t){
  var board = ['.', '.', 'O', '.', '.', 'O', '.', '.', ' '];
  t.equals(game.get_pattern_1_move(board), 8, 'patterns_1[6][1] is returned when pattern_1[6][0] is matched');
  t.end();
});

test('Testing that get_pattern_1_move() returns the correct next position', function(t){
  var board = ['O', 'O', ' ', '.', '.', '.', '.', '.', '.'];
  t.equals(game.get_pattern_1_move(board), 2, 'patterns_1[7][1] is returned when pattern_1[7][0] is matched');
  t.end();
});

test('Testing that get_pattern_1_move() returns the correct next position', function(t){
  var board = [' ', '.', '.', '.', 'O', '.', '.', '.', 'O'];
  t.equals(game.get_pattern_1_move(board), 0, 'patterns_1[8][1] is returned when pattern_1[8][0] is matched');
  t.end();
});

test('Testing that get_pattern_1_move() returns the correct next position', function(t){
  var board = ['.', '.', 'O', '.', 'O', '.', ' ', '.', '.'];
  t.equals(game.get_pattern_1_move(board), 6, 'patterns_1[9][1] is returned when pattern_1[9][0] is matched');
  t.end();
});

test('Testing that get_pattern_1_move() returns the correct next position', function(t){
  var board = ['O', '.', '.', '.', 'O', '.', '.', '.', ' '];
  t.equals(game.get_pattern_1_move(board), 8, 'patterns_1[10][1] is returned when pattern_1[10][0] is matched');
  t.end();
});

test('Testing that get_pattern_1_move() returns the correct next position', function(t){
  var board = ['.', '.', ' ', '.', 'O', '.', 'O', '.', '.'];
  t.equals(game.get_pattern_1_move(board), 2,'patterns_1[11][1] is returned when pattern_1[11][0] is matched');
  t.end();
});

test('Testing that get_pattern_1_move() returns the correct next position', function(t){
  var board = ['O', ' ', 'O', '.', '.', '.', '.', '.', '.'];
  t.equals(game.get_pattern_1_move(board), 1, 'patterns_1[12][1] is returned when pattern_1[12][0] is matched');
  t.end();
});

test('Testing that get_pattern_1_move() returns the correct next position', function(t){
  var board = ['O', '.', '.', ' ', '.', '.', 'O', '.', '.'];
  t.equals(game.get_pattern_1_move(board), 3, 'patterns_1[13][1] is returned when pattern_1[13][0] is matched');
  t.end();
});

test('Testing that get_pattern_1_move() returns the correct next position', function(t){
  var board = ['.', '.', '.', '.', '.', '.', 'O', ' ', 'O'];
  t.equals(game.get_pattern_1_move(board), 7, 'patterns_1[14][1] is returned when pattern_1[14][0] is matched');
  t.end();
});

test('Testing that get_pattern_1_move() returns the correct next position', function(t){
  var board = ['.', '.', 'O', '.', '.', ' ', '.', '.', 'O'];
  t.equals(game.get_pattern_1_move(board), 5, 'patterns_1[15][1] is returned when pattern_1[15][0] is matched');
  t.end();
});

test('Testing that get_pattern_1_move() returns the correct next position', function(t){
  var board = ['.', ' ', '.', '.', 'O', '.', '.', 'O', '.'];
  t.equals(game.get_pattern_1_move(board), 1, 'patterns_1[16][1] is returned when pattern_1[16][0] is matched');
  t.end();
});

test('Testing that get_pattern_1_move() returns the correct next position', function(t){
  var board = ['.', '.', '.', ' ', 'O', 'O', '.', '.', '.'];
  t.equals(game.get_pattern_1_move(board), 3, 'patterns_1[17][1] is returned when pattern_1[17][0] is matched');
  t.end();
});

test('Testing that get_pattern_1_move() returns the correct next position', function(t){
  var board = ['.', 'O', '.', '.', 'O', '.', '.', ' ', '.'];
  t.equals(game.get_pattern_1_move(board), 7, 'patterns_1[18][1] is returned when pattern_1[18][0] is matched');
  t.end();
});

test('Testing that get_pattern_1_move() returns the correct next position', function(t){
  var board = ['.', '.', '.', 'O', 'O', ' ', '.', '.', '.'];
  t.equals(game.get_pattern_1_move(board), 5, 'patterns_1[19][1] is returned when pattern_1[19][0] is matched');
  t.end();
});

test('Testing that get_pattern_2_move() returns the correct next position', function(t){
  var board = [' ', ' ', 'X', ' ', '.', ' ', 'X', ' ', ' '];
  t.equals(game.get_pattern_2_move(board), 1, 'patterns_2[0][1] is returned when pattern_2[0][0] is matched');
  t.end();
});

test('Testing that get_pattern_2_move() returns the correct next position', function(t){
  var board = [' ', 'X', 'X', '.', '.', '.', '.', '.', '.'];
  t.equals(game.get_pattern_2_move(board), 0, 'patterns_2[1][1] is returned when pattern_2[1][0] is matched');
  t.end();
});

test('Testing that get_pattern_2_move() returns the correct next position', function(t){
  var board = ['X', '.', '.', 'X', '.', '.', ' ', '.', '.'];
  t.equals(game.get_pattern_2_move(board), 6, 'patterns_2[2][1] is returned when pattern_2[2][0] is matched');
  t.end();
});

test('Testing that get_pattern_2_move() returns the correct next position', function(t){
  var board = ['.', '.', '.', '.', '.', '.', 'X', 'X', ' '];
  t.equals(game.get_pattern_2_move(board), 8, 'patterns_2[3][1] is returned when pattern_2[3][0] is matched');
  t.end();
});

test('Testing that get_pattern_2_move() returns the correct next position', function(t){
  var board = ['.', '.', ' ', '.', '.', 'X', '.', '.', 'X'];
  t.equals(game.get_pattern_2_move(board), 2, 'patterns_2[4][1] is returned when pattern_2[4][0] is matched');
  t.end();
});

test('Testing that get_pattern_2_move() returns the correct next position', function(t){
  var board = [' ', '.', '.', 'X', '.', '.', 'X', '.', '.'];
  t.equals(game.get_pattern_2_move(board), 0, 'patterns_2[5][1] is returned when pattern_2[5][0] is matched');
  t.end();
});

test('Testing that get_pattern_2_move() returns the correct next position', function(t){
  var board = ['.', '.', '.', '.', '.', '.', ' ', 'X', 'X'];
  t.equals(game.get_pattern_2_move(board), 6, 'patterns_2[6][1] is returned when pattern_2[6][0] is matched');
  t.end();
});

test('Testing that get_pattern_2_move() returns the correct next position', function(t){
  var board = ['.', '.', 'X', '.', '.', 'X', '.', '.', ' '];
  t.equals(game.get_pattern_2_move(board), 8, 'patterns_2[7][1] is returned when pattern_2[7][0] is matched');
  t.end();
});

test('Testing that get_pattern_2_move() returns the correct next position', function(t){
  var board = ['X', 'X', ' ', '.', '.', '.', '.', '.', '.'];
  t.equals(game.get_pattern_2_move(board), 2, 'patterns_2[8][1] is returned when pattern_2[8][0] is matched');
  t.end();
});

test('Testing that get_pattern_2_move() returns the correct next position', function(t){
  var board = [' ', '.', '.', '.', 'X', '.', '.', '.', 'X'];
  t.equals(game.get_pattern_2_move(board), 0, 'patterns_2[9][1] is returned when pattern_2[9][0] is matched');
  t.end();
});

test('Testing that get_pattern_2_move() returns the correct next position', function(t){
  var board = ['.', '.', 'X', '.', 'X', '.', ' ', '.', '.'];
  t.equals(game.get_pattern_2_move(board), 6, 'patterns_2[10][1] is returned when pattern_2[10][0] is matched');
  t.end();
});

test('Testing that get_pattern_2_move() returns the correct next position', function(t){
  var board = ['X', '.', '.', '.', 'X', '.', '.', '.', ' '];
  t.equals(game.get_pattern_2_move(board), 8, 'patterns_2[11][1] is returned when pattern_2[11][0] is matched');
  t.end();
});

test('Testing that get_pattern_2_move() returns the correct next position', function(t){
  var board = ['.', '.', ' ', '.', 'X', '.', 'X', '.', '.'];
  t.equals(game.get_pattern_2_move(board), 2, 'patterns_2[12][1] is returned when pattern_2[12][0] is matched');
  t.end();
});

test('Testing that get_pattern_2_move() returns the correct next position', function(t){
  var board = ['X', ' ', 'X', '.', '.', '.', '.', '.', '.'];
  t.equals(game.get_pattern_2_move(board), 1, 'patterns_2[13][1] is returned when pattern_2[13][0] is matched');
  t.end();
});

test('Testing that get_pattern_2_move() returns the correct next position', function(t){
  var board = ['X', '.', '.', ' ', '.', '.', 'X', '.', '.'];
  t.equals(game.get_pattern_2_move(board), 3, 'patterns_2[14][1] is returned when pattern_2[14][0] is matched');
  t.end();
});

test('Testing that get_pattern_2_move() returns the correct next position', function(t){
  var board = ['.', '.', '.', '.', '.', '.', 'X', ' ', 'X'];
  t.equals(game.get_pattern_2_move(board), 7, 'patterns_2[15][1] is returned when pattern_2[15][0] is matched');
  t.end();
});

test('Testing that get_pattern_2_move() returns the correct next position', function(t){
  var board = ['.', '.', 'X', '.', '.', ' ', '.', '.', 'X'];
  t.equals(game.get_pattern_2_move(board), 5, 'patterns_2[16][1] is returned when pattern_2[16][0] is matched');
  t.end();
});

test('Testing that get_pattern_2_move() returns the correct next position', function(t){
  var board = ['.', ' ', '.', '.', 'X', '.', '.', 'X', '.'];
  t.equals(game.get_pattern_2_move(board), 1, 'patterns_2[17][1] is returned when pattern_2[17][0] is matched');
  t.end();
});

test('Testing that get_pattern_2_move() returns the correct next position', function(t){
  var board = ['.', '.', '.', ' ', 'X', 'X', '.', '.', '.'];
  t.equals(game.get_pattern_2_move(board), 3, 'patterns_2[18][1] is returned when pattern_2[18][0] is matched');
  t.end();
});

test('Testing that get_pattern_2_move() returns the correct next position', function(t){
  var board = ['.', 'X', '.', '.', 'X', '.', '.', ' ', '.'];
  t.equals(game.get_pattern_2_move(board), 7, 'patterns_2[19][1] is returned when pattern_2[19][0] is matched');
  t.end();
});

test('Testing that get_pattern_2_move() returns the correct next position', function(t){
  var board = ['.', '.', '.', 'X', 'X', ' ', '.', '.', '.'];
  t.equals(game.get_pattern_2_move(board), 5, 'patterns_2[20][1] is returned when pattern_2[20][0] is matched');
  t.end();
});

test('Testing that get_pattern_2_move() returns the correct next position', function(t){
  var board = [' ', 'X', ' ', 'X', '.', '.', ' ', '.', '.'];
  t.equals(game.get_pattern_2_move(board), 0, 'patterns_2[21][1] is returned when pattern_2[21][0] is matched');
  t.end();
});

test('Testing that get_pattern_2_move() returns the correct next position', function(t){
  var board = [' ', '.', '.', 'X', '.', '.', ' ', 'X', ' '];
  t.equals(game.get_pattern_2_move(board), 6, 'patterns_2[22][1] is returned when pattern_2[22][0] is matched');
  t.end();
});

test('Testing that get_pattern_2_move() returns the correct next position', function(t){
  var board = ['.', '.', ' ', '.', '.', 'X', ' ', 'X', ' '];
  t.equals(game.get_pattern_2_move(board), 8, 'patterns_2[23][1] is returned when pattern_2[23][0] is matched');
  t.end();
});

test('Testing that get_pattern_2_move() returns the correct next position', function(t){
  var board = [' ', 'X', ' ', '.', '.', 'X', '.', '.', ' '];
  t.equals(game.get_pattern_2_move(board), 2, 'patterns_2[24][1] is returned when pattern_2[24][0] is matched');
  t.end();
});

test('Testing that get_pattern_2_move() returns the correct next position', function(t){
  var board = [' ', ' ', 'X', 'X', '.', '.', ' ', '.', '.'];
  t.equals(game.get_pattern_2_move(board), 0, 'patterns_2[25][1] is returned when pattern_2[25][0] is matched');
  t.end();
});

test('Testing that get_pattern_2_move() returns the correct next position', function(t){
  var board = ['X', '.', '.', ' ', '.', '.', ' ', 'X', ' '];
  t.equals(game.get_pattern_2_move(board), 6, 'patterns_2[26][1] is returned when pattern_2[26][0] is matched');
  t.end();
});

test('Testing that get_pattern_2_move() returns the correct next position', function(t){
  var board = ['.', '.', ' ', '.', 'X', 'X', ' ', ' ', ' '];
  t.equals(game.get_pattern_2_move(board), 8, 'patterns_2[27][1] is returned when pattern_2[27][0] is matched');
  t.end();
});

test('Testing that get_pattern_2_move() returns the correct next position', function(t){
  var board = ['X', ' ', ' ', '.', '.', 'X', '.', '.', ' '];
  t.equals(game.get_pattern_2_move(board), 2, 'patterns_2[28][1] is returned when pattern_2[28][0] is matched');
  t.end();
});

test('Testing that get_pattern_2_move() returns the correct next position', function(t){
  var board = [' ', 'X', ' ', ' ', '.', '.', 'X', '.', '.'];
  t.equals(game.get_pattern_2_move(board), 0, 'patterns_2[29][1] is returned when pattern_2[29][0] is matched');
  t.end();
});

test('Testing that get_pattern_2_move() returns the correct next position', function(t){
  var board = [' ', '.', '.', 'X', '.', '.', ' ', ' ', 'X'];
  t.equals(game.get_pattern_2_move(board), 6, 'patterns_2[30][1] is returned when pattern_2[30][0] is matched');
  t.end();
});

test('Testing that get_pattern_2_move() returns the correct next position', function(t){
  var board = ['.', '.', 'X', '.', '.', ' ', ' ', 'X', ' '];
  t.equals(game.get_pattern_2_move(board), 8, 'patterns_2[31][1] is returned when pattern_2[31][0] is matched');
  t.end();
});

test('Testing that get_pattern_2_move() returns the correct next position', function(t){
  var board = ['X', ' ', ' ', '.', '.', 'X', '.', '.', ' '];
  t.equals(game.get_pattern_2_move(board), 2, 'patterns_2[32][1] is returned when pattern_2[32][0] is matched');
  t.end();
});
