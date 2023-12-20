import { Cell } from "../core/cell";

class GameOfLife {
  private constructor(private table: Cell[][]) { }

  static createWithInitialState(state: number[][]) {
    return new GameOfLife(state.map(row => row.map(cell => Cell.createFromNumber(cell))));
  }

  status() {
    return this.table.map(row => row.map(cell => cell.isLive() ? 1 : 0));
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
    const game = GameOfLife.createWithInitialState([[0, 0, 0], [0, 0, 0], [0, 0, 0]]);

    const table = game.status();

    expect(table).toStrictEqual(new Array(3).fill(new Array(3).fill(0)))
  });

  it('generates a correctly a block', () => {
    const block = [[0, 0, 0, 0], [0, 1, 1, 0], [0, 1, 1, 0], [0, 0, 0, 0]];
    const game = GameOfLife.createWithInitialState(block);

    expect(game.status()).toStrictEqual(block);

    game.tick();

    expect(game.status()).toStrictEqual(block);
  });
});
