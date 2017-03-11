var test = require('tape');
var game = require('../public/index.js');

test('Testing that hasSomeoneWon() returns the correct winning player', function(t){
  var board = [' ', 'O', 'O', '.', '.', '.', '.', '.', ' '];
  t.notOk(game.hasSomeoneWon(board)[0], 'false is returned when pattern is not matched');
  t.equals(game.hasSomeoneWon(board)[1], null, 'test passed: O in the winner');
  t.end();
});

test('Testing that hasSomeoneWon() returns the correct winning player', function(t){
  var board = ['O', 'O', 'O', '.', '.', '.', '.', '.', ' '];
  t.ok(game.hasSomeoneWon(board), 'true is returned when patterns_3[0][0] is matched');
  t.equals(game.hasSomeoneWon(board)[1], 'O', 'test passed: O in the winner');
  t.end();
});

test('Testing that hasSomeoneWon() returns the correct winning player', function(t){
  var board = ['.', '.', '.', 'O', 'O', 'O', '.', '.', '.'];
  t.ok(game.hasSomeoneWon(board), 'true is returned when patterns_3[1][0] is matched');
  t.equals(game.hasSomeoneWon(board)[1], 'O', 'test passed: O in the winner');
  t.end();
});

test('Testing that hasSomeoneWon() returns the correct winning player', function(t){
  var board = ['.', '.', '.', '.', '.', '.', 'O', 'O', 'O'];
  t.ok(game.hasSomeoneWon(board), 'true is returned when patterns_3[2][0] is matched');
  t.equals(game.hasSomeoneWon(board)[1], 'O', 'test passed: O in the winner');
  t.end();
});

test('Testing that hasSomeoneWon() returns the correct winning player', function(t){
  var board = ['O', '.', '.', 'O', '.', '.', 'O', '.', '.'];
  t.ok(game.hasSomeoneWon(board), 'true is returned when patterns_3[3][0] is matched');
  t.equals(game.hasSomeoneWon(board)[1], 'O', 'test passed: O in the winner');
  t.end();
});

test('Testing that hasSomeoneWon() returns the correct winning player', function(t){
  var board = ['.', 'O', '.', '.', 'O', '.', '.', 'O', '.'];
  t.ok(game.hasSomeoneWon(board), 'true is returned when patterns_3[4][0] is matched');
  t.equals(game.hasSomeoneWon(board)[1], 'O', 'test passed: O in the winner');
  t.end();
});

test('Testing that hasSomeoneWon() returns the correct winning player', function(t){
  var board = ['.', '.', 'O', '.', '.', 'O', '.', '.', 'O'];
  t.ok(game.hasSomeoneWon(board), 'true is returned when patterns_3[5][0] is matched');
  t.equals(game.hasSomeoneWon(board)[1], 'O', 'test passed: O in the winner');
  t.end();
});

test('Testing that hasSomeoneWon() returns the correct winning player', function(t){
  var board = ['O', '.', '.', '.', 'O', '.', '.', '.', 'O'];
  t.ok(game.hasSomeoneWon(board), 'true is returned when patterns_3[6][0] is matched');
  t.equals(game.hasSomeoneWon(board)[1], 'O', 'test passed: O in the winner');
  t.end();
});

test('Testing that hasSomeoneWon() returns the correct winning player', function(t){
  var board = ['.', '.', 'O', '.', 'O', '.', 'O', '.', '.'];
  t.ok(game.hasSomeoneWon(board), 'true is returned when patterns_3[7][0] is matched');
  t.equals(game.hasSomeoneWon(board)[1], 'O', 'test passed: O in the winner');
  t.end();
});

test('Testing that hasSomeoneWon() returns the correct winning player', function(t){
  var board = ['X', 'X', 'X', '.', '.', '.', '.', '.', '.'];
  t.ok(game.hasSomeoneWon(board), 'true is returned when patterns_3[8][0] is matched');
  t.equals(game.hasSomeoneWon(board)[1], 'X', 'test passed: X in the winner');
  t.end();
});

test('Testing that hasSomeoneWon() returns the correct winning player', function(t){
  var board = ['.', '.', '.', 'X', 'X', 'X', '.', '.', '.'];
  t.ok(game.hasSomeoneWon(board), 'true is returned when patterns_3[9][0] is matched');
  t.equals(game.hasSomeoneWon(board)[1], 'X', 'test passed: X in the winner');
  t.end();
});

test('Testing that hasSomeoneWon() returns the correct winning player', function(t){
  var board = ['.', '.', '.', '.', '.', '.', 'X', 'X', 'X'];
  t.ok(game.hasSomeoneWon(board), 'true is returned when patterns_3[10][0] is matched');
  t.equals(game.hasSomeoneWon(board)[1], 'X', 'test passed: X in the winner');
  t.end();
});

test('Testing that hasSomeoneWon() returns the correct winning player', function(t){
  var board = ['X', '.', '.', 'X', '.', '.', 'X', '.', '.'];
  t.ok(game.hasSomeoneWon(board), 'true is returned when patterns_3[11][0] is matched');
  t.equals(game.hasSomeoneWon(board)[1], 'X', 'test passed: X in the winner');
  t.end();
});

test('Testing that hasSomeoneWon() returns the correct winning player', function(t){
  var board = ['.', 'X', '.', '.', 'X', '.', '.', 'X', '.'];
  t.ok(game.hasSomeoneWon(board), 'true is returned when patterns_3[12][0] is matched');
  t.equals(game.hasSomeoneWon(board)[1], 'X', 'test passed: X in the winner');
  t.end();
});

test('Testing that hasSomeoneWon() returns the correct winning player', function(t){
  var board = ['.', '.', 'X', '.', '.', 'X', '.', '.', 'X'];
  t.ok(game.hasSomeoneWon(board), 'true is returned when patterns_3[13][0] is matched');
  t.equals(game.hasSomeoneWon(board)[1], 'X', 'test passed: X in the winner');
  t.end();
});

test('Testing that hasSomeoneWon() returns the correct winning player', function(t){
  var board = ['X', '.', '.', '.', 'X', '.', '.', '.', 'X'];
  t.ok(game.hasSomeoneWon(board), 'true is returned when patterns_3[14][0] is matched');
  t.equals(game.hasSomeoneWon(board)[1], 'X', 'test passed: X in the winner');
  t.end();
});

test('Testing that hasSomeoneWon() returns the correct winning player', function(t){
  var board = ['.', '.', 'X', '.', 'X', '.', 'X', '.', '.'];
  t.ok(game.hasSomeoneWon(board), 'true is returned when patterns_3[15][11] is matched');
  t.equals(game.hasSomeoneWon(board)[1], 'X', 'test passed: X in the winner');
  t.end();
});
