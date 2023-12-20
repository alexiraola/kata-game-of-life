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
    this.table = this.table.map((rows, row) => {
      return rows.map((cell, column) => {
        return cell.nextCell(this.liveNeighbours(row, column));
      });
    });
  }

  private liveNeighbours(row: number, column: number) {
    return this.neighbours(row, column).filter(cell => cell.isLive()).length;
  }

  private neighbours(row: number, column: number) {
    const maxIndex = this.table.length - 1;

    const left = column === 0 ? maxIndex : column - 1;
    const top = row === 0 ? maxIndex : row - 1;
    const right = column === maxIndex ? 0 : column + 1;
    const bottom = row === maxIndex ? 0 : row + 1;

    return [
      this.table[top][left],
      this.table[top][column],
      this.table[top][right],
      this.table[row][left],
      this.table[row][right],
      this.table[bottom][left],
      this.table[bottom][column],
      this.table[bottom][right]
    ];
  }
}

describe('Game of life', () => {
  it('creates a game table', () => {
    const game = GameOfLife.createWithInitialState([
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0]
    ]);

    const table = game.status();

    expect(table).toStrictEqual(new Array(3).fill(new Array(3).fill(0)))
  });

  it('generates a correctly a block', () => {
    const block = [
      [0, 0, 0, 0],
      [0, 1, 1, 0],
      [0, 1, 1, 0],
      [0, 0, 0, 0]
    ];
    const game = GameOfLife.createWithInitialState(block);

    expect(game.status()).toStrictEqual(block);

    game.tick();

    expect(game.status()).toStrictEqual(block);
  });

  it('generates correctly a blinker', () => {
    const blinker1 = [
      [0, 0, 0, 0, 0],
      [0, 0, 1, 0, 0],
      [0, 0, 1, 0, 0],
      [0, 0, 1, 0, 0],
      [0, 0, 0, 0, 0]
    ];
    const blinker2 = [
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 1, 1, 1, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0]
    ];
    const game = GameOfLife.createWithInitialState(blinker1);

    expect(game.status()).toStrictEqual(blinker1);

    game.tick();


    expect(game.status()).toStrictEqual(blinker2);
  });
});
