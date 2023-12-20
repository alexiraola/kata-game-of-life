export class Cell {
  private constructor(private readonly live: boolean) { }

  static createLive() {
    return new Cell(true);
  }

  static createDead() {
    return new Cell(false);
  }

  static createFromNumber(value: number) {
    return new Cell(value === 1);
  }

  static createFromChar(value: string) {
    return new Cell(value === 'x');
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
