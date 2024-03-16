import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MoveService {
  constructor() {}

  moveTile(board: number[][], tile: number): boolean {
    let location = this.getBoardIndex(board, tile);
    let emptyLocation = this.getBoardIndex(board, 16);
    if (
      Math.abs(location[0] - emptyLocation[0]) +
        Math.abs(location[1] - emptyLocation[1]) ==
      1
    ) {
      this.swapTiles(board, tile, 16);
      return true;
    }
    return false;
  }

  getBoardIndex(board: number[][], tile: number): [number, number] {
    for (let i = 0; i < board.length; i++) {
      var index = board[i].indexOf(tile);
      if (index > -1) {
        return [i, index];
      }
    }
    return [0, 0];
  }

  swapTiles(board: number[][], tile: number, newTile: number): void {
    let location = this.getBoardIndex(board, tile);
    let newLocation = this.getBoardIndex(board, newTile);
    board[newLocation[0]][newLocation[1]] = tile;
    board[location[0]][location[1]] = newTile;
  }
}
