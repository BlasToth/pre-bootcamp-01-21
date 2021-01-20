const grid = document.querySelectorAll(".cell");

let player1 = "X";
let player2 = "O";
let player1WonMessage = "WINNER: PLAYER1 - X \n Do you want to play again?";
let player2WonMessage = "WINNER: PLAYER2 - O \n Do you want to play again?";
let turn = 0;
let lastClickValue = "";
let winner = false;
let board = [ "", "", "", 
              "", "", "",
              "", "", "" ];
              console.log(...board);

// game
for (let i = 0; i < 9; i++) {
  grid[i].addEventListener("click", (e) => {
    // marking spaces and alternating "X" and "O"
    if (turn % 2 === 0) {
      if (!board[i]) { // should not overwrite the cell
        turn++;
        board[i] = player1;
        grid[i].innerText = player1;
        grid[i].style.backgroundColor = "blue";
        lastClickValue = grid[i].textContent;
        win();
      }
    } else {
      if (!board[i]) {
        turn++;
        board[i] = player2;
        grid[i].innerText = player2;
        grid[i].style.backgroundColor = "red";
        lastClickValue = grid[i].textContent;
        win();
      }
      }
    console.log(...board);
    console.log(turn);
  });
}
