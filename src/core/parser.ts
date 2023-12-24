import { Cell, DeadCell, LiveCell } from "./cell";
import { GameOfLife } from "./game";

export enum CellValue {
  LIVE = 'x',
  DEAD = '-'
}

export class GameMapper {
  static fromTextToGame(text: string) {
    const rows = text.trim().split("\n");
    return new GameOfLife(rows.map(row => row.trim().split(' ').map(cell => this.fromTextToCell(cell))));
  }

  private static fromTextToCell(value: string) {
    switch (value) {
      case CellValue.LIVE:
        return new LiveCell();
      case CellValue.DEAD:
        return new DeadCell();
    }
    throw Error(`Invalid cell value: ${value}`);
  }

  static fromGameToText(game: GameOfLife) {
    return game.table.map(row => {
      return row.map(cell => this.fromCellToText(cell)).join(' ')
    }).join("\n");
  }

  private static fromCellToText(cell: Cell) {
    return cell.isLive()
      ? CellValue.LIVE
      : CellValue.DEAD;
  }
}
