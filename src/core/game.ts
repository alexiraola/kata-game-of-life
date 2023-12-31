import { Cell } from "./cell";

export class GameOfLife {
  constructor(readonly table: Cell[][]) { }

  tick() {
    const newTable = this.table.map((rows, row) => {
      return rows.map((cell, column) => {
        return cell.nextCell(this.liveNeighbours(row, column));
      });
    });

    return new GameOfLife(newTable);
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

