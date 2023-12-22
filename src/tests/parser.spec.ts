import { DeadCell, LiveCell } from '../core/cell';
import { GameOfLife } from '../core/game';
import { GameParser, GamePrinter } from '../core/parser';

describe('Cell parser', () => {
  it('should create a cell from a string', () => {
    const liveCell = GameParser.parseCell('x');
    const deadCell = GameParser.parseCell('-');

    expect(liveCell.isLive()).toBeTruthy();
    expect(deadCell.isLive()).toBeFalsy();
  });

  it('should create a game from a string', () => {
    const game = GameParser.parseGame('- x -');

    expect(game.table).toEqual([[new DeadCell(), new LiveCell(), new DeadCell()]]);
  });

  it('should print a cell', () => {
    const liveCell = new LiveCell();
    const deadCell = new DeadCell();

    expect(GamePrinter.printCell(liveCell)).toBe('x');
    expect(GamePrinter.printCell(deadCell)).toBe('-');
  });

  it('should print a game status', () => {
    const game = new GameOfLife([
      [new DeadCell(), new LiveCell(), new DeadCell()],
      [new LiveCell(), new LiveCell(), new LiveCell()],
      [new LiveCell(), new DeadCell(), new LiveCell()],
    ]);

    expect(GamePrinter.printGame(game)).toEqual("- x -\nx x x\nx - x");
  });
});
