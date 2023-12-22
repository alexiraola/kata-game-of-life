import { DeadCell, LiveCell } from '../core/cell';

describe('Cell', () => {
  it('should create a live cell', () => {
    const cell = new LiveCell();

    expect(cell.isLive()).toBeTruthy();
  });

  it('should create a dead cell', () => {
    const cell = new DeadCell();

    expect(cell.isLive()).toBeFalsy();
  });

  it('a live cell with no neighbours dies', () => {
    const cell = new LiveCell();

    const nextCell = cell.nextCell(0);

    expect(nextCell.isLive()).toBeFalsy();
  });

  it('a live cell with one neighbour dies', () => {
    const cell = new LiveCell();

    const nextCell = cell.nextCell(1);

    expect(nextCell.isLive()).toBeFalsy();
  });

  it('a live cell with two neighbours lives on to the next generation', () => {
    const cell = new LiveCell();

    const nextCell = cell.nextCell(2);

    expect(nextCell.isLive()).toBeTruthy();
  });

  it('a live cell with three neighbours lives on to the next generation', () => {
    const cell = new LiveCell();

    const nextCell = cell.nextCell(3);

    expect(nextCell.isLive()).toBeTruthy();
  });

  it('a live cell with more than three neighbours dies', () => {
    const cell = new LiveCell();

    const nextCell = cell.nextCell(4);

    expect(nextCell.isLive()).toBeFalsy();
  });

  it('a dead cell with exactly three live neighbours becomes a live cell', () => {
    const cell = new DeadCell();

    const nextCell = cell.nextCell(3);

    expect(nextCell.isLive()).toBeTruthy();
  });

  it('a dead cell with any number of neighbours different to three stays dead', () => {
    const cell = new DeadCell();

    const nextCell = cell.nextCell(2);

    expect(nextCell.isLive()).toBeFalsy();
  });
});
