export class Cell {
  private constructor(private readonly live: boolean) { }

  static createLive() {
    return new Cell(true);
  }

  static createDead() {
    return new Cell(false);
  }

  isLive() {
    return this.live;
  }

  nextCell(neighbours: number) {
    if (this.live) {
      if (neighbours === 2 || neighbours === 3) {
        return Cell.createLive();
      }
    } else {
      if (neighbours === 3) {
        return Cell.createLive();
      }
    }
    return Cell.createDead();
  }
}
