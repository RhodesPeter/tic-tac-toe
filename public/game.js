(function () {
  "use strict";

  var game = document.getElementsByClassName("game")[0];
  var challengeContainer = document.getElementsByClassName("pick-game__container")[0];
  var symbolContainer = document.getElementsByClassName("pick-game__symbol-container")[0];
  var pickChallenge = document.getElementsByClassName("pick-game__challenge");
  var symbolButtons = document.getElementsByClassName("pick-game__symbol");
  var player = document.getElementsByClassName("player")[0];
  var box = document.getElementsByClassName("box");
  var startGameButton = document.getElementsByClassName('game__start-button')[0];
  var whoGoesFirst = document.getElementsByClassName('game__who-goes-first')[0];
  var gameMessage = document.getElementsByClassName('game__board-message')[0];
  var whoGoesFirstButton1 = document.getElementsByClassName('pick-game__player1-button')[0];
  var whoGoesFirstButton2 = document.getElementsByClassName('pick-game__player2-button')[0];

  var gameState = {
    board : [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    "Player 1" : '',
    "Player 2" : '',
    Computer : 'O',
    challenge : '',
    currentTurn : 'Player 1',
    status : 'on'
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
                        [(/OOO....../)],[(/...OOO.../)],[(/......OOO/)],
                        [(/O..O..O../)],[(/.O..O..O./)],[(/..O..O..O/)],
                        [(/O...O...O/)],[(/..O.O.O../)],[(/XXX....../)],
                        [(/...XXX.../)],[(/......XXX/)],[(/X..X..X../)],
                        [(/.X..X..X./)],[(/..X..X..X/)],[(/X...X...X/)],
                        [(/..X.X.X../)]
                       ];

  for(var i = 0; i < pickChallenge.length; i++) {
    addListenerToChallengeButtons();
  }

  function addListenerToChallengeButtons(){
    pickChallenge[i].addEventListener("click", function() {
      var challenge = event.target.innerHTML;
      addButtonText(whoGoesFirstButton1, whoGoesFirstButton2, challenge);
      addChallenge(event.target.innerHTML);
      if (challenge === 'Computer vs. Computer'){
        swapVisibility(challengeContainer, whoGoesFirst);
        show(document.getElementsByClassName('game__start-button')[0]);
      }
      else if (challenge === 'Human vs. Human'){
        swapVisibility(challengeContainer, symbolContainer);
        player.innerHTML = 'Player 1';
      }
      else {
        swapVisibility(challengeContainer, symbolContainer);
      }
    });
  }

  for(var i = 0; i < symbolButtons.length; i++) {
    addListenerTosymbolButtons(i);
  }

  function addListenerTosymbolButtons(i){
    symbolButtons[i].addEventListener("click", function() {
      var symbol = event.target.innerHTML;
      if (gameState["Player 1"] === '' && gameState.challenge === 'Human vs. Human'){
        addSymbol(symbol, 'Player 1');
        player.innerHTML = 'Player 2';
      }
      else if (gameState["Player 1"] === ''){
        addSymbol(symbol, 'Player 1');
        swapVisibility(symbolContainer, whoGoesFirst);
      }
      else if (gameState["Player 1"] === symbol){
        player.innerHTML = 'That symbol has been taken!';
      }
      else {
        swapVisibility(symbolContainer, whoGoesFirst);
        addSymbol(symbol, 'Player 2');
      }
    });
  }

  for(var i = 0; i < box.length; i++) {
    addListenersToBoxes(i);
  }

  function addListenersToBoxes(i){
    box[i].addEventListener("click", function() {
      if (gameState.status === 'off'){ return; }
      if (gameState.board[i] !== ' '){
        return
      }
      else if (gameState.challenge === 'Human vs. Human'){
        markBox(i, gameState.currentTurn);
        humanVsHuman(i);
      }
      else if (gameState.currentTurn === 'Player 1'){
        markBox(i, gameState.currentTurn);
        humanVsComputer(i);
      }
    });
  }

  whoGoesFirst.addEventListener('click', function(){
    var element = event.target.className;
    var challenge = gameState.challenge;
    if (element === 'pick-game__player1-button' || element === 'pick-game__player2-button'){
      gameState.currentTurn = event.target.innerHTML;
      swapVisibility(whoGoesFirst, game);
      if (gameState.currentTurn === 'Computer'){
        humanVsComputer();
      }
      else if (challenge === "Human vs. Human" || challenge === "Human vs. Computer"){
        inPlayMessage(event.target.innerHTML + ' make your move!');
      }
    }
  })

  startGameButton.addEventListener("click", function(){ compVsComp() })

  function addChallenge(challenge){
    gameState.challenge = challenge;
  }

  function addSymbol(symbol, player){
    gameState[player] = symbol;
    if (gameState['Player 1'] === 'O'){ gameState["Player 2"] = 'X'; }
    else { gameState["Player 2"] = 'O' };
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

  function markBox(pos, player){
    box[pos].innerHTML = gameState[player];
  };

  function inPlayMessage(message){
    gameMessage.innerHTML = message
  }

  function addButtonText(button1, button2, challenge){
    if (challenge === "Human vs. Computer"){
      button2.innerHTML = 'Computer';
    }
    else if (challenge === "Computer vs. Computer") {
      button1.innerHTML = 'Computer 1';
      button2.innerHTML = 'Computer 2';
    }
  }

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
      markBox(pos, gameState.currentTurn);
      gameState.board.splice(pos, 1, symbol);
      gameState.currentTurn = (gameState.currentTurn === 'Player 1') ? 'Player 2' : 'Player 1';
    }
  };

  function mapSymbolToPatterns(boardArray){
    var boardConvertedToOXforComparison = boardArray.join('');

    var replace = gameState["Player 1"];
    var pattern = new RegExp(replace,"g");
    var strForComparison = boardConvertedToOXforComparison.replace(pattern, "-");

    var replace2 = gameState["Player 2"];
    var pattern2 = new RegExp(replace2,"g");
    strForComparison = strForComparison.replace(pattern2, "O");

    var replace3 = '-';
    var pattern3 = new RegExp(replace3,"g");
    strForComparison = strForComparison.replace(pattern3, "X");

   return strForComparison;
  };

  function winner(){
    var winner = null;
    if (gameState.challenge === "Human vs. Computer"){
      return (gameState.currentTurn === 'Player 1') ? 'Computer' : 'Player 1';
    }
    else if (gameState.challenge === "Computer vs. Computer"){
      return (gameState.currentTurn === 'Player 1') ? 'Computer 2' : 'Computer 1';
    }
    else {
      return (gameState.currentTurn === 'Player 1') ? 'Player 2' : 'Player 1';
    }
  }

  function hasSomeoneWon(){
    var boardString = mapSymbolToPatterns(gameState.board);
    for(var i = 0;i < hasWonPatterns.length;i++){
      if(boardString.match(hasWonPatterns[i][0])){
        inPlayMessage(winner() + ' is the winner!');
        gameState.status = 'off'
        return true;
      };
    };
    return false;
  }

  function isBoardFilled (){
    if(gameState.board.indexOf(' ') === -1){
      inPlayMessage("Game over, it's a draw!");
      return true;
    }
    return false;
  };

  // return the next move by matching a pattern from winningMovePatterns
  function makeWinningMove(board){
    var boardString = mapSymbolToPatterns(board);
    for(var i = 0;i < winningMovePatterns.length;i++){
      if (boardString.match(winningMovePatterns[i][0])){
        console.log('make winning move');
        return winningMovePatterns[i][1];
      };
    }
    return -1;
  };

  // return the next move by matching a pattern from winningMovePatterns
  function makeBlockingMove(board){
    var boardString = mapSymbolToPatterns(board);
    for(var i = 0; i < blockingPatterns.length; i++){
      var array = boardString.match(blockingPatterns[i][0]);
        if(array){
          console.log('make blocking winning move');
          return blockingPatterns[i][1];
        }
    }
    return -1;
  };

  function defaultMove(board){
    console.log('make default move');
    return board[4] === ' ' ? 4 : board.indexOf(' ');
  };

  function boardDisplay(board){
    return ' '+board[0]+' |'+' '+board[1]+' |'+' '+board[2]+'\n===+===+===\n'+' '+
               board[3]+' |'+' '+board[4]+' |'+' '+board[5]+'\n===+===+===\n'+' '+
               board[6]+' |'+' '+board[7]+' |'+' '+board[8];
  };

  function humanVsComputer(pos){
    if (gameState["Player 1"] === 'O'){ gameState["Computer"] = 'X' }

    makeMove(pos, gameState[gameState.currentTurn]);
    if (hasSomeoneWon()){ return; };
    if (isBoardFilled()){ return; };

    inPlayMessage('Computer make your move!');
    computersMove()
  };

  function computersMove(){
    setTimeout(function(){
      var nextPos = findNextMove(gameState.board);
      makeMove(nextPos, gameState[gameState.currentTurn])
      if (hasSomeoneWon()){ return; };
      if (isBoardFilled()){ return; };
      inPlayMessage('Player 1 make your move!');
    }, 650);
  }

  function humanVsHuman(pos){
    makeMove(pos, gameState[gameState.currentTurn]);
    if (hasSomeoneWon()){ return; };
    if (isBoardFilled()){ return; };
    inPlayMessage(gameState.currentTurn + ' make your move!');
  }

  // setTimeout to delay the computer's response
  function compVsComp(){

    var board = gameState.board;
    board = board.map(a => { return (a === 'X') ? 'O' : (a === 'O') ? 'X' : ' ';})

    // this line is needed so that that human player can't click the board
    gameState.status = 'off'

    gameState["Player 1"] = 'X';
    gameState["Player 2"] = 'O';
    if (gameState.currentTurn === "Computer 1"){
      gameState.currentTurn = "Player 1"
    }
    else if (gameState.currentTurn === "Computer 2"){
      gameState.currentTurn = "Player 2"
    }
    setTimeout(function(){
      var nextPos = findNextMove(board);
      makeMove(nextPos, gameState[gameState.currentTurn]);
      // console.log(boardDisplay(gameState.board));
      if (hasSomeoneWon()){ return; };
      if (isBoardFilled()){ return; };
      compVsComp();
    }, 650);
  };
})();
