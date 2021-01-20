function win() {
    // horizontal check
    if ( board[0] === player1 && board[1] === player1 && board[2] === player1 ) {
      winner = true;
      setTimeout(()=> {
          confirm("WINNER: PLAYER1 - X \n Do you want to play again?");
      }, 300);
          setTimeout(()=> {
        endGame();
      }, 2000); 
  
    }
    if ( board[0] === player2 && board[1] === player2 && board[2] === player2 ) {
      winner = true;
      setTimeout(()=> {
          confirm("WINNER: PLAYER2 - O \n Do you want to play again?");
      }, 300);
          setTimeout(()=> {
        endGame();
      }, 2000); 
  
    }
    if ( board[3] === player1 && board[4] === player1 && board[5] === player1 ) {
      winner = true;
      setTimeout(()=> {
          confirm("WINNER: PLAYER1 - X \n Do you want to play again?");
      }, 300);
          setTimeout(()=> {
        endGame();
      }, 2000); 
  
    }
    if ( board[3] === player2 && board[4] === player2 && board[5] === player2 ) {
      winner = true;
      setTimeout(()=> {
          confirm("WINNER: PLAYER2 - O \n Do you want to play again?");
      }, 300);
          setTimeout(()=> {
        endGame();
      }, 2000); 
  
    }
    if ( board[6] === player1 && board[7] === player1 && board[8] === player1 ) {
      winner = true;
      setTimeout(()=> {
          confirm("WINNER: PLAYER1 - X \n Do you want to play again?");
      }, 300);
          setTimeout(()=> {
        endGame();
      }, 2000); 
  
    }
    if ( board[6] === player2 && board[7] === player2 && board[8] === player2 ) {
      winner = true;
      setTimeout(()=> {
          confirm("WINNER: PLAYER2 - O \n Do you want to play again?");
      }, 300);
          setTimeout(()=> {
        endGame();
      }, 2000); 
  
    }
    // vertical check
    if ( board[0] === player1 && board[3] === player1 && board[6] === player1 ) {
      winner = true;
      setTimeout(()=> {
          confirm("WINNER: PLAYER1 - X \n Do you want to play again?");
      }, 300);
          setTimeout(()=> {
        endGame();
      }, 2000); 
  
    }
    if ( board[0] === player2 && board[3] === player2 && board[6] === player2 ) {
      winner = true;
      setTimeout(()=> {
          confirm("WINNER: PLAYER2 - O \n Do you want to play again?");
      }, 300);
          setTimeout(()=> {
        endGame();
      }, 2000); 
  
    }
    if ( board[1] === player1 && board[4] === player1 && board[7] === player1 ) {
      winner = true;
      setTimeout(()=> {
          confirm("WINNER: PLAYER1 - X \n Do you want to play again?");
      }, 300);
          setTimeout(()=> {
        endGame();
      }, 2000); 
  
    }
    if ( board[1] === player2 && board[4] === player2 && board[7] === player2 ) {
      winner = true;
      setTimeout(()=> {
          confirm("WINNER: PLAYER2 - O \n Do you want to play again?");
      }, 300);
          setTimeout(()=> {
        endGame();
      }, 2000); 
  
    }
    if ( board[2] === player1 && board[5] === player1 && board[8] === player1 ) {
      winner = true;
      setTimeout(()=> {
          confirm("WINNER: PLAYER1 - X \n Do you want to play again?");
      }, 300);
          setTimeout(()=> {
        endGame();
      }, 2000); 
  
    }
    if ( board[2] === player2 && board[5] === player2 && board[8] === player2 ) {
      winner = true;
      setTimeout(()=> {
          confirm("WINNER: PLAYER2 - O \n Do you want to play again?");
      }, 300);
          setTimeout(()=> {
        endGame();
      }, 2000); 
  
    }
    // diagonal check
    if ( board[0] === player1 && board[4] === player1 && board[8] === player1 ) {
      winner = true;
      setTimeout(()=> {
          confirm("WINNER: PLAYER1 - X \n Do you want to play again?");
      }, 300);
          setTimeout(()=> {
        endGame();
      }, 2000); 
  
    }
    if ( board[0] === player2 && board[4] === player2 && board[8] === player2 ) {
      winner = true;
      setTimeout(()=> {
          confirm("WINNER: PLAYER2 - O \n Do you want to play again?");
      }, 300);
          setTimeout(()=> {
        endGame();
      }, 2000); 
  
    }
    if ( board[2] === player1 && board[4] === player1 && board[6] === player1 ) {
      winner = true;
      setTimeout(()=> {
          confirm("WINNER: PLAYER1 - X \n Do you want to play again?");
      }, 300);
          setTimeout(()=> {
        endGame();
      }, 2000); 
  
    }
    if ( board[2] === player2 && board[4] === player2 && board[6] === player2 ) {
      winner = true;
      setTimeout(()=> {
          confirm("WINNER: PLAYER2 - O \n Do you want to play again?");
      }, 300);
          setTimeout(()=> {
        endGame();
      }, 2000);   
  }
}

function endGame() {
  
    if (winner === true) {
      for (let i = 0; i < 9; i++) {
        grid[i].innerText = "";
        grid[i].style.backgroundColor = "rgb(218, 184, 140)";
        board[i] = "";
        winner = false;
      }
    }
  }