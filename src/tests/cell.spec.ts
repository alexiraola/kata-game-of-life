class Cell {
  private constructor(private readonly live: boolean) { }

  static createLive() {
    return new Cell(true);
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
});
