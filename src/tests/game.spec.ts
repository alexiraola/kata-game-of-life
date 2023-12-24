import { GameMapper } from '../core/parser';

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
    const game = GameMapper.fromTextToGame(state);

    expect(GameMapper.fromGameToText(game)).toBe(state)
  });

  it('generates correctly a block', () => {
    const block = normalizeTableString(`
      - - - -
      - x x -
      - x x -
      - - - -
    `);

    const game = GameMapper.fromTextToGame(block);

    expect(GameMapper.fromGameToText(game)).toBe(block);
    expect(GameMapper.fromGameToText(game.tick())).toBe(block);
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

    const game = GameMapper.fromTextToGame(blinker1);

    expect(GameMapper.fromGameToText(game)).toBe(blinker1);
    expect(GameMapper.fromGameToText(game.tick())).toBe(blinker2);
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
    const game = GameMapper.fromTextToGame(toad1);

    expect(GameMapper.fromGameToText(game)).toBe(toad1);
    expect(GameMapper.fromGameToText(game.tick())).toBe(toad2);
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
    const game = GameMapper.fromTextToGame(beacon1);

    expect(GameMapper.fromGameToText(game)).toBe(beacon1);
    expect(GameMapper.fromGameToText(game.tick())).toBe(beacon2);
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
    const game = GameMapper.fromTextToGame(glider1);

    expect(GameMapper.fromGameToText(game)).toBe(glider1);
    expect(GameMapper.fromGameToText(game.tick())).toBe(glider2);
    expect(GameMapper.fromGameToText(game.tick().tick())).toBe(glider3);
    expect(GameMapper.fromGameToText(game.tick().tick().tick())).toBe(glider4);
    expect(GameMapper.fromGameToText(game.tick().tick().tick().tick())).toBe(glider5);
  });
});
