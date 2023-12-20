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

    const topLeft = row === 0 || column === 0 ? Cell.createDead() : this.table[row - 1][column - 1];
    const top = row === 0 ? Cell.createDead() : this.table[row - 1][column];
    const topRight = row === 0 || column === maxIndex ? Cell.createDead() : this.table[row - 1][column + 1];
    const left = column === 0 ? Cell.createDead() : this.table[row][column - 1];
    const right = column === maxIndex ? Cell.createDead() : this.table[row][column + 1];
    const bottomLeft = row === maxIndex || column === 0 ? Cell.createDead() : this.table[row + 1][column - 1];
    const bottom = row === maxIndex ? Cell.createDead() : this.table[row + 1][column];
    const bottomRight = row === maxIndex || column === maxIndex ? Cell.createDead() : this.table[row + 1][column + 1];

    return [topLeft, top, topRight, left, right, bottomLeft, bottom, bottomRight];
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
