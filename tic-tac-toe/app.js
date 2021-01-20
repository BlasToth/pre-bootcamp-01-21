const grid = document.querySelectorAll(".cell");

let player1 = "X";
let player2 = "O";
let turn = 0;
let winner = false;
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
      if (!board[i]) {
        board[i] = player1;
        grid[i].innerText = player1;
        grid[i].style.backgroundColor = "blue";
        win();
      }
    } else {
      if (!board[i]) {
        board[i] = player2;
        grid[i].innerText = player2;
        grid[i].style.backgroundColor = "red";
        win();
      }
      }
    console.log(...board);
  });
}
