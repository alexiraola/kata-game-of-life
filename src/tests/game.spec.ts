import { GameParser, GamePrinter } from '../core/parser';

describe('Game of life', () => {
  const normalizeTableString = (table: string) => {
    return table.trim().replace(/[ ]{2,}/g, '');
  }

  it('creates a game table', () => {
    const state = normalizeTableString(`
      - - -
      - - -
      - - -
    `);
    const game = GameParser.parseGame(state);

    expect(GamePrinter.printGame(game)).toBe(state)
  });

  it('generates correctly a block', () => {
    const block = normalizeTableString(`
      - - - -
      - x x -
      - x x -
      - - - -
    `);

    const game = GameParser.parseGame(block);

    expect(GamePrinter.printGame(game)).toBe(block);
    expect(GamePrinter.printGame(game.tick())).toBe(block);
  });

  it('generates correctly a blinker', () => {
    const blinker1 = normalizeTableString(`
      - - - - -
      - - x - -
      - - x - -
      - - x - -
      - - - - -
    `);
    const blinker2 = normalizeTableString(`
      - - - - -
      - - - - -
      - x x x -
      - - - - -
      - - - - -
    `);

    const game = GameParser.parseGame(blinker1);

    expect(GamePrinter.printGame(game)).toBe(blinker1);
    expect(GamePrinter.printGame(game.tick())).toBe(blinker2);
  });

  it('generates correctly a toad', () => {
    const toad1 = normalizeTableString(`
      - - - - - -
      - - - - - -
      - - x x x -
      - x x x - -
      - - - - - -
      - - - - - -
    `);
    const toad2 = normalizeTableString(`
      - - - - - -
      - - - x - -
      - x - - x -
      - x - - x -
      - - x - - -
      - - - - - -
    `);
    const game = GameParser.parseGame(toad1);

    expect(GamePrinter.printGame(game)).toBe(toad1);
    expect(GamePrinter.printGame(game.tick())).toBe(toad2);
  });

  it('generates correctly a beacon', () => {
    const beacon1 = normalizeTableString(`
      - - - - - -
      - x x - - -
      - x x - - -
      - - - x x -
      - - - x x -
      - - - - - -
    `);
    const beacon2 = normalizeTableString(`
      - - - - - -
      - x x - - -
      - x - - - -
      - - - - x -
      - - - x x -
      - - - - - -
    `);
    const game = GameParser.parseGame(beacon1);

    expect(GamePrinter.printGame(game)).toBe(beacon1);
    expect(GamePrinter.printGame(game.tick())).toBe(beacon2);
  });

  it('generates correctly a glider', () => {
    const glider1 = normalizeTableString(`
      - - x - - -
      - - - x - -
      - x x x - -
      - - - - - -
      - - - - - -
      - - - - - -
    `);
    const glider2 = normalizeTableString(`
      - - - - - -
      - x - x - -
      - - x x - -
      - - x - - -
      - - - - - -
      - - - - - -
    `);
    const glider3 = normalizeTableString(`
      - - - - - -
      - - - x - -
      - x - x - -
      - - x x - -
      - - - - - -
      - - - - - -
    `);
    const glider4 = normalizeTableString(`
      - - - - - -
      - - x - - -
      - - - x x -
      - - x x - -
      - - - - - -
      - - - - - -
    `);
    const glider5 = normalizeTableString(`
      - - - - - -
      - - - x - -
      - - - - x -
      - - x x x -
      - - - - - -
      - - - - - -
    `);
    const game = GameParser.parseGame(glider1);

    expect(GamePrinter.printGame(game)).toBe(glider1);
    expect(GamePrinter.printGame(game.tick())).toBe(glider2);
    expect(GamePrinter.printGame(game.tick().tick())).toBe(glider3);
    expect(GamePrinter.printGame(game.tick().tick().tick())).toBe(glider4);
    expect(GamePrinter.printGame(game.tick().tick().tick().tick())).toBe(glider5);
  });
});
