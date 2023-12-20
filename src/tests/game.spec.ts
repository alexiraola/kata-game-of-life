import { GameOfLife } from '../core/game';

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
    const game = GameOfLife.createFromInitialState(state);

    const table = game.toString();

    expect(table).toBe(state)
  });

  it('generates correctly a block', () => {
    const block = normalizeTableString(`
      - - - -
      - x x -
      - x x -
      - - - -
    `);

    const game = GameOfLife.createFromInitialState(block);

    expect(game.toString()).toBe(block);

    game.tick();

    expect(game.toString()).toBe(block);
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

    const game = GameOfLife.createFromInitialState(blinker1);

    expect(game.toString()).toBe(blinker1);

    game.tick();

    expect(game.toString()).toBe(blinker2);
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
    const game = GameOfLife.createFromInitialState(toad1);

    expect(game.toString()).toBe(toad1);

    game.tick();

    expect(game.toString()).toBe(toad2);
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
    const game = GameOfLife.createFromInitialState(beacon1);

    expect(game.toString()).toBe(beacon1);

    game.tick();

    expect(game.toString()).toBe(beacon2);
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
    const game = GameOfLife.createFromInitialState(glider1);

    expect(game.toString()).toBe(glider1);

    game.tick();

    expect(game.toString()).toBe(glider2);

    game.tick();

    expect(game.toString()).toBe(glider3);

    game.tick();

    expect(game.toString()).toBe(glider4);

    game.tick();

    expect(game.toString()).toBe(glider5);
  });
});
