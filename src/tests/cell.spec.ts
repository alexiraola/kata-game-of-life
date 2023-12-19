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
}

describe('Cell', () => {
  it('should create a live cell', () => {
    const cell = Cell.createLive();

    expect(cell.isLive()).toBeTruthy();
  });

  it('should create a dead cell', () => {
    const cell = Cell.createDead();

    expect(cell.isLive()).toBeFalsy();
  })
});
