export interface Cell {
  isLive(): boolean;
  nextCell(neighbours: number): Cell;
}

export class LiveCell implements Cell {
  isLive(): boolean {
    return true;
  }
  nextCell(neighbours: number): Cell {
    if (neighbours === 3 || neighbours === 2) {
      return new LiveCell();
    }
    return new DeadCell();
  }
}

export class DeadCell implements Cell {
  isLive(): boolean {
    return false;
  }

  nextCell(neighbours: number): Cell {
    if (neighbours === 3) {
      return new LiveCell();
    }
    return new DeadCell();
  }
}
