class GameOfLife {
  private table: number[][];

  constructor(private readonly width: number, private readonly height: number) {
    this.table = new Array(width).fill(new Array(height).fill(0));
  }

  status() {
    return this.table;
  }
}

describe('Game of life', () => {
  it('creates a game table', () => {
    const game = new GameOfLife(20, 20);

    const table = game.status();

    expect(table).toStrictEqual(new Array(20).fill(new Array(20).fill(0)))
  });
});
