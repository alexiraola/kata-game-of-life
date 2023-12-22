import { Cell, DeadCell, LiveCell } from "./cell";
import { GameOfLife } from "./game";

export enum CellValue {
  LIVE = 'x',
  DEAD = '-'
}

export class GameParser {
  static parseGame(state: string) {
    const rows = state.trim().split("\n");
    return new GameOfLife(rows.map(row => row.trim().split(' ').map(cell => this.parseCell(cell))));
  }

  static parseCell(value: string) {
    switch (value) {
      case CellValue.LIVE:
        return new LiveCell();
      case CellValue.DEAD:
        return new DeadCell();
    }
    throw Error(`Invalid cell value: ${value}`);
  }
}

export class GamePrinter {
  static printGame(game: GameOfLife) {
    return game.table.map(row => {
      return row.map(cell => this.printCell(cell)).join(' ')
    }).join("\n");
  }

  static printCell(cell: Cell) {
    return cell.isLive()
      ? CellValue.LIVE
      : CellValue.DEAD;
  }
}
