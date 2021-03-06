const grid = document.querySelectorAll(".cell");
const resBtn = document.getElementById("restart");

let player1 = "X";
let player2 = "O";
let player1WonMessage = "WINNER: PLAYER1 - X \n Do you want to play again?";
let player2WonMessage = "WINNER: PLAYER2 - O \n Do you want to play again?";
let turn = 0;
let lastClickValue = "";
let winner = false;
let resetButton = false;
let board = ["", "", "", "", "", "", "", "", ""];

// game
for (let i = 0; i < 9; i++) {
  grid[i].addEventListener("click", (e) => {
    // marking spaces and alternating "X" and "O"
    if (turn % 2 === 0) {
      if (!board[i]) {
        // should not overwrite the cell
        turn++;
        board[i] = player1;
        grid[i].innerText = player1;
        grid[i].style.backgroundColor = "#1D77A1";
        lastClickValue = grid[i].textContent;
        if (winner === true) lastClickValue = "";
        win();
      }
    } else {
      if (!board[i]) {
        turn++;
        board[i] = player2;
        grid[i].innerText = player2;
        grid[i].style.backgroundColor = "#ED4521";
        lastClickValue = grid[i].textContent;
        if (winner === true) lastClickValue = "";
        win();
      }
    }
    //console.log(...board);
    //console.log(turn);
  });
}

resBtn.addEventListener("click", () => {
  resetButton = true;
  if (confirm("Do you really want to restart the game?")) {
    endGame();
  }
});
