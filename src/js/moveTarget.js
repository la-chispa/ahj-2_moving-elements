export default function moveTarget() {
  const cells = document.getElementsByClassName('cell');
  let activeCell = Math.floor(Math.random() * cells.length);
  const getCell = (index) => cells[index];
  const deactivateCell = (index) => getCell(index).classList.remove('cell_has-goblin');
  const activateCell = (index) => getCell(index).classList.add('cell_has-goblin');
  const next = () => setTimeout(() => {
    const nextCell = Math.floor(Math.random() * cells.length);
    if (nextCell !== activeCell) {
      deactivateCell(activeCell);
      activeCell = nextCell;
      activateCell(activeCell);
      next();
    } else {
      next();
    }
  }, 800);
  next();
}
