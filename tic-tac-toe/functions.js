function win() {
  // horizontal check
  if (
    (board[0] === player1 && board[1] === player1 && board[2] === player1) ||
    (board[0] === player2 && board[1] === player2 && board[2] === player2) ||
    (board[3] === player1 && board[4] === player1 && board[5] === player1) ||
    (board[3] === player2 && board[4] === player2 && board[5] === player2) ||
    (board[6] === player1 && board[7] === player1 && board[8] === player1) ||
    (board[6] === player2 && board[7] === player2 && board[8] === player2)
  ) {
    handleWinner();
    // grid[0].style.backgroundColor = "green";
    // grid[1].style.backgroundColor = "green";
    // grid[2].style.backgroundColor = "green";
  }

  // vertical check
  if (
    (board[0] === player1 && board[3] === player1 && board[6] === player1) ||
    (board[0] === player2 && board[3] === player2 && board[6] === player2) ||
    (board[1] === player1 && board[4] === player1 && board[7] === player1) ||
    (board[1] === player2 && board[4] === player2 && board[7] === player2) ||
    (board[2] === player1 && board[5] === player1 && board[8] === player1) ||
    (board[2] === player2 && board[5] === player2 && board[8] === player2)
  ) {
    handleWinner();
  }
  // diagonal check
  if (
    (board[0] === player1 && board[4] === player1 && board[8] === player1) ||
    (board[0] === player2 && board[4] === player2 && board[8] === player2) ||
    (board[2] === player1 && board[4] === player1 && board[6] === player1) ||
    (board[2] === player2 && board[4] === player2 && board[6] === player2)
  ) {
    handleWinner();
  }
  // Tie
  else if (turn === 9 && winner === false) {
    setTimeout(() => {
      confirm("IT IS A TIE!!! \n Do you want to play again?");
      endGame();
    }, 300);
  }
}

function endGame() {
  if (winner === true || turn === 9 || resetButton === true) {
    for (let i = 0; i < 9; i++) {
      grid[i].innerText = "";
      grid[i].style.backgroundColor = " #5AC8DB";
      board[i] = "";
      winner = false;
      turn = 0;
      lastClickValue = "end";
      resetButton = false;
    }
  }
}

function handleWinner() {
  winner = true;

  if (lastClickValue === "X") {
    setTimeout(() => {
      confirm(player1WonMessage);
    }, 30);
  }
  if (lastClickValue === "O") {
    setTimeout(() => {
      confirm(player2WonMessage);
    }, 30);
  }
  setTimeout(() => {
    endGame();
  }, 1200);
}
