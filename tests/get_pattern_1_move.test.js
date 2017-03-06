var test = require('tape');
var game = require('../game.js');

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
