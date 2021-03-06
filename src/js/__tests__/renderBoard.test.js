import renderBoard from '../renderBoard';

test('board should be rendered', () => {
  document.body.innerHTML = '<div class="container"></div>';
  renderBoard(4);
  const cells = document.getElementsByClassName('cell');
  expect(cells.length).toBe(16);
  expect(document.querySelector('.board')).toBeTruthy();
});
