import { GameOfLife } from '../core/game';

describe('Game of life', () => {
  it('creates a game table', () => {
    const game = GameOfLife.createFromString(`
      - - -
      - - -
      - - -
    `);

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

  it('generates correctly a toad', () => {
    const toad1 = [
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 1, 1, 1, 0],
      [0, 1, 1, 1, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0]
    ];
    const toad2 = [
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 1, 0, 0],
      [0, 1, 0, 0, 1, 0],
      [0, 1, 0, 0, 1, 0],
      [0, 0, 1, 0, 0, 0],
      [0, 0, 0, 0, 0, 0]
    ];
    const game = GameOfLife.createWithInitialState(toad1);

    expect(game.status()).toStrictEqual(toad1);

    game.tick();

    expect(game.status()).toStrictEqual(toad2);
  });

  it('generates correctly a beacon', () => {
    const beacon1 = [
      [0, 0, 0, 0, 0, 0],
      [0, 1, 1, 0, 0, 0],
      [0, 1, 1, 0, 0, 0],
      [0, 0, 0, 1, 1, 0],
      [0, 0, 0, 1, 1, 0],
      [0, 0, 0, 0, 0, 0]
    ];
    const beacon2 = [
      [0, 0, 0, 0, 0, 0],
      [0, 1, 1, 0, 0, 0],
      [0, 1, 0, 0, 0, 0],
      [0, 0, 0, 0, 1, 0],
      [0, 0, 0, 1, 1, 0],
      [0, 0, 0, 0, 0, 0]
    ];
    const game = GameOfLife.createWithInitialState(beacon1);

    expect(game.status()).toStrictEqual(beacon1);

    game.tick();

    expect(game.status()).toStrictEqual(beacon2);
  });

  it('generates correctly a glider', () => {
    const glider1 = [
      [0, 0, 1, 0, 0, 0],
      [0, 0, 0, 1, 0, 0],
      [0, 1, 1, 1, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0]
    ];
    const glider2 = [
      [0, 0, 0, 0, 0, 0],
      [0, 1, 0, 1, 0, 0],
      [0, 0, 1, 1, 0, 0],
      [0, 0, 1, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0]
    ];
    const glider3 = [
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 1, 0, 0],
      [0, 1, 0, 1, 0, 0],
      [0, 0, 1, 1, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0]
    ];
    const glider4 = [
      [0, 0, 0, 0, 0, 0],
      [0, 0, 1, 0, 0, 0],
      [0, 0, 0, 1, 1, 0],
      [0, 0, 1, 1, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0]
    ];
    const glider5 = [
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 1, 0, 0],
      [0, 0, 0, 0, 1, 0],
      [0, 0, 1, 1, 1, 0],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0]
    ];
    const game = GameOfLife.createWithInitialState(glider1);

    expect(game.status()).toStrictEqual(glider1);

    game.tick();

    expect(game.status()).toStrictEqual(glider2);

    game.tick();

    expect(game.status()).toStrictEqual(glider3);

    game.tick();

    expect(game.status()).toStrictEqual(glider4);

    game.tick();

    expect(game.status()).toStrictEqual(glider5);
  });
});
