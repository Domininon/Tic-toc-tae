const cells = document.querySelectorAll(".cell");
const restartButton = document.getElementById("restart");
let currentPlayer = "X";
let board = Array(9).fill(null);
let isGameActive = true;

const winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

cells.forEach((cell) => {
  cell.addEventListener("click", () => {
    const index = cell.getAttribute("data-index");

    if (!board[index] && isGameActive) {
      board[index] = currentPlayer;
      cell.textContent = currentPlayer;
      if (checkWin()) {
        alert(`${currentPlayer} wins!`);
        isGameActive = false;
      } else if (board.every((cell) => cell)) {
        alert("It's a draw!");
        isGameActive = false;
      } else {
        currentPlayer = currentPlayer === "X" ? "O" : "X";
      }
    }
  });
});

restartButton.addEventListener("click", resetGame);

function checkWin() {
  return winningCombinations.some((combination) => {
    return combination.every((index) => board[index] === currentPlayer);
  });
}

function resetGame() {
  board = Array(9).fill(null);
  cells.forEach((cell) => (cell.textContent = ""));
  currentPlayer = "X";
  isGameActive = true;
}
