class Cell {
  private constructor(private readonly live: boolean) { }

  static createLive() {
    return new Cell(true);
  }

  static createDead() {
    return new Cell(false);
  }

  isLive() {
    return this.live;
  }

  nextCell(neighbours: number) {
    if (neighbours === 2 || neighbours === 3) {
      return Cell.createLive();
    }
    return Cell.createDead();
  }
}

describe('Cell', () => {
  it('should create a live cell', () => {
    const cell = Cell.createLive();

    expect(cell.isLive()).toBeTruthy();
  });

  it('should create a dead cell', () => {
    const cell = Cell.createDead();

    expect(cell.isLive()).toBeFalsy();
  });

  it('a live cell with no neighbours dies', () => {
    const cell = Cell.createLive();

    const nextCell = cell.nextCell(0);

    expect(nextCell.isLive()).toBeFalsy();
  });

  it('a live cell with one neighbour dies', () => {
    const cell = Cell.createLive();

    const nextCell = cell.nextCell(1);

    expect(nextCell.isLive()).toBeFalsy();
  });

  it('a live cell with two neighbours lives on to the next generation', () => {
    const cell = Cell.createLive();

    const nextCell = cell.nextCell(2);

    expect(nextCell.isLive()).toBeTruthy();
  });

  it('a live cell with three neighbours lives on to the next generation', () => {
    const cell = Cell.createLive();

    const nextCell = cell.nextCell(3);

    expect(nextCell.isLive()).toBeTruthy();
  });
});
