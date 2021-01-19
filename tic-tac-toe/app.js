const grid = document.querySelectorAll(".cell");

let player1 = "X";
let player2 = "O";
let turn = 0;

// game
for (let i = 0; i < 9; i++) {
  grid[i].addEventListener("click", () => {
      turn++;
      console.log(turn);
    
    if (turn % 2 === 0) {
        grid[i].innerText = player1;
        grid[i].style.backgroundColor = "blue";
    }
    else {
        grid[i].innerText = player2;
        grid[i].style.backgroundColor = "red";
    }
  });
}

function win() {
    
}


