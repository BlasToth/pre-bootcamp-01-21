const grid = document.querySelectorAll(".cell");

let player1 = "X";
let player2 = "O";
let turn = 0;
let board = [ "", "", "", 
              "", "", "",
              "", "", "" ];
              console.log(...board);

// game
for (let i = 0; i < 9; i++) {
  grid[i].addEventListener("click", (e) => {
    turn++;
    // marking spaces and alternating "X" and "O"
    if (turn % 2 === 0) {
      grid[i].innerText = player1;
      grid[i].style.backgroundColor = "blue";
      board[i] = player1;
      win();
    } else {
      grid[i].innerText = player2;
      grid[i].style.backgroundColor = "red";
      board[i] = player2;
      win();
    }
    

    console.log(...board);

    // winner
    function win() {
      // horizontal check
      if ( board[0] === player1 && board[1] === player1 && board[2] === player1 ) alert("WINNER PLAYER1 - X");
      if ( board[0] === player2 && board[1] === player2 && board[2] === player2 ) alert("WINNER PLAYER2 - O");
      if ( board[3] === player1 && board[4] === player1 && board[5] === player1 ) alert("WINNER PLAYER1 - X");
      if ( board[3] === player2 && board[4] === player2 && board[5] === player2 ) alert("WINNER PLAYER2 - O");
      if ( board[6] === player1 && board[7] === player1 && board[8] === player1 ) alert("WINNER PLAYER1 - X");
      if ( board[6] === player2 && board[7] === player2 && board[8] === player2 ) alert("WINNER PLAYER2 - O");
      // vertical check
      if ( board[0] === player1 && board[3] === player1 && board[6] === player1 ) alert("WINNER PLAYER1 - X");
      if ( board[0] === player2 && board[3] === player2 && board[6] === player2 ) alert("WINNER PLAYER2 - O");
      if ( board[1] === player1 && board[4] === player1 && board[7] === player1 ) alert("WINNER PLAYER1 - X");
      if ( board[1] === player2 && board[4] === player2 && board[7] === player2 ) alert("WINNER PLAYER2 - O");
      if ( board[2] === player1 && board[5] === player1 && board[8] === player1 ) alert("WINNER PLAYER1 - X");
      if ( board[2] === player2 && board[5] === player2 && board[8] === player2 ) alert("WINNER PLAYER2 - O");
      // diagonal check
      if ( board[0] === player1 && board[4] === player1 && board[8] === player1 ) alert("WINNER PLAYER1 - X");
      if ( board[0] === player2 && board[4] === player2 && board[8] === player2 ) alert("WINNER PLAYER2 - O");
      if ( board[2] === player1 && board[4] === player1 && board[6] === player1 ) alert("WINNER PLAYER1 - X");
      if ( board[2] === player2 && board[4] === player2 && board[6] === player2 ) alert("WINNER PLAYER2 - O");
    }
  });
}

