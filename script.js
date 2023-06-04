let board = ['', '', '', '', '', '', '', '', ''];
let currentPlayer = 'X';
let gameEnded = false;

function performMove(cellIndex) {
  if (board[cellIndex] === '' && !gameEnded) {
    board[cellIndex] = currentPlayer;
    document.getElementsByClassName('cell')[cellIndex].innerText = currentPlayer;
    document.getElementsByClassName('cell')[cellIndex].style.backgroundColor = currentPlayer === 'X' ? 'lightgreen' : 'lightpink';
    
    if (checkWin()) {
      document.getElementById('result').innerText = `Player ${currentPlayer} wins!`;
      gameEnded = true;
      document.getElementById('scoreInput').value = 1;
    } else if (board.indexOf('') === -1) {
      document.getElementById('result').innerText = 'Draw!';
      gameEnded = true;
      document.getElementById('scoreInput').value = 0;
    } else {
      currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
  }
}

function checkWin() {
  const winCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  
  for (let combination of winCombinations) {
    if (
      board[combination[0]] === currentPlayer &&
      board[combination[1]] === currentPlayer &&
      board[combination[2]] === currentPlayer
    ) {
      return true;
    }
  }
  
  return false;
}
