export default function renderBoard(boardSize) {
  const container = document.querySelector('.container');
  const boardEl = document.createElement('div');
  boardEl.classList.add('board');
  container.appendChild(boardEl);

  for (let i = 0; i < boardSize ** 2; i += 1) {
    const cellEl = document.createElement('div');
    cellEl.classList.add('cell');
    boardEl.appendChild(cellEl);
  }
}
