let currentPlayer = "X";
let gameBoard = ["", "", "", "", "", "", "", "", ""];

// Function to make a move
function makeMove(index) {
  if (gameBoard[index] === "") {
    gameBoard[index] = currentPlayer;
    document.getElementById("ticTacToeBoard").children[index].innerText = currentPlayer;
    document.getElementById("ticTacToeBoard").children[index].style.cursor = "default";
    document.getElementById("ticTacToeBoard").children[index].removeAttribute("onclick");
    checkWin();
    currentPlayer = (currentPlayer === "X") ? "O" : "X";
  }
}

// Function to check if a player wins
function checkWin() {
  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  for (let i = 0; i < winningCombinations.length; i++) {
    const [a, b, c] = winningCombinations[i];
    if (gameBoard[a] !== "" && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
      alert(currentPlayer + " wins!");
      setTimeout(() => {
        window.location.reload()
      },2000); 
        // window.location.reload()
      // return;
    }
  }

  if (!gameBoard.includes("")) {
    alert("It's a tie!");
    setTimeout(() => {
      window.location.reload()
    },2000);
  }
}

// Function to reset the
