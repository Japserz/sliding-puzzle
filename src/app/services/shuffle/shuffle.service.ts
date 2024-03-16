import { Injectable } from '@angular/core';
import { MoveService } from '../move/move.service';

@Injectable({
  providedIn: 'root',
})
export class ShuffleService {
  board: number[][] = [];
  start: boolean = true;
  constructor(private moveService: MoveService) {}

  shuffle(amount: number, board: number[][]): void {
    if (this.start) {
      this.board = board;
      this.start = false;
    }
    let emptyLocation = this.moveService.getBoardIndex(board, 16);
    let possibleMoves = [
      [-1, 0],
      [1, 0],
      [0, -1],
      [0, 1],
    ];

    let move = possibleMoves[Math.floor(Math.random() * 4)];
    if (
      emptyLocation[0] + move[0] < 0 ||
      emptyLocation[0] + move[0] >= board.length ||
      emptyLocation[1] + move[1] < 0 ||
      emptyLocation[1] + move[1] >= board[0].length
    ) {
      this.shuffle(amount, board);
    } else {
      let tile =
        this.board[emptyLocation[0] + move[0]][emptyLocation[1] + move[1]];
      this.moveService.swapTiles(board, tile, 16);

      if (amount > 0) {
        this.shuffle(amount - 1, board);
      } else {
        this.setEmptyBottomRight(board);
      }
    }
  }

  setEmptyBottomRight(board: number[][]): void {
    let emptyLocation = this.moveService.getBoardIndex(board, 16);
    while (emptyLocation[0] != 3) {
      let tile = this.board[emptyLocation[0] + 1][emptyLocation[1]];
      this.moveService.swapTiles(board, tile, 16);
      emptyLocation = this.moveService.getBoardIndex(board, 16);
    }
    while (emptyLocation[1] != 3) {
      let tile = this.board[emptyLocation[0]][emptyLocation[1] + 1];
      this.moveService.swapTiles(board, tile, 16);
      emptyLocation = this.moveService.getBoardIndex(board, 16);
    }
  }
}
