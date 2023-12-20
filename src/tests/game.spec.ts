import { GameOfLife } from '../core/game';

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
});
