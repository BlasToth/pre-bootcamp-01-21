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
    // marking spaces and alternating "X" and "O"
    console.log(turn);
    if (turn % 2 === 0) {
      if (!board[i]) {
        turn++;
        board[i] = player1;
        grid[i].innerText = player1;
        grid[i].style.backgroundColor = "blue";
        win();
      }
    } else {
      if (!board[i]) {
        turn++;
        board[i] = player2;
        grid[i].innerText = player2;
        grid[i].style.backgroundColor = "red";
        win();
      }
      }
    console.log(...board);
  });
}
