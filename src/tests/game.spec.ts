class GameOfLife {
  constructor(private table: number[][]) { }

  status() {
    return this.table;
  }

  tick() {
    this.table = this.table.map(rows => {
      return rows.map(column => {
        return column;
      });
    });
  }
}

describe('Game of life', () => {
  it('creates a game table', () => {
    const game = new GameOfLife([[0, 0, 0], [0, 0, 0], [0, 0, 0]]);

    const table = game.status();

    expect(table).toStrictEqual(new Array(3).fill(new Array(3).fill(0)))
  });

  it('generates a correctly a block', () => {
    const block = [[0, 0, 0, 0], [0, 1, 1, 0], [0, 1, 1, 0], [0, 0, 0, 0]];
    const game = new GameOfLife(block);

    expect(game.status()).toStrictEqual(block);

    game.tick();

    expect(game.status()).toStrictEqual(block);
  });
});
