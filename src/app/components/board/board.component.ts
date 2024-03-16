import { Component, OnInit } from '@angular/core';
import { TileComponent } from '../tile/tile.component';
import { WinPopupComponent } from '../win-popup/win-popup.component';
import { CommonModule } from '@angular/common';
import { ShuffleService } from '../../services/shuffle/shuffle.service';
import { MoveService } from '../../services/move/move.service';

@Component({
  selector: 'board',
  standalone: true,
  imports: [CommonModule, TileComponent, WinPopupComponent],
  templateUrl: './board.component.html',
  styleUrl: './board.component.scss',
})
export class BoardComponent implements OnInit {
  board: number[][] = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16],
  ];
  tempBoard: number[][] = this.board;
  win: Boolean = false;

  moves: number = 0;

  easyStart: number = 10;

  constructor(
    private shuffleService: ShuffleService,
    private moveService: MoveService
  ) {}

  ngOnInit() {
    this.shuffle(this.easyStart);
  }

  validate(): void {
    let flattenedBoard: number[] = this.board.flat();
    for (let i = 0; i < flattenedBoard.length; i++) {
      if (flattenedBoard[i] != i + 1) {
        return;
      }
    }
    this.win = true;
  }

  shuffle(amount: number): void {
    this.win = false;
    this.moves = 0;
    this.shuffleService.shuffle(amount, this.board);
  }

  moveTile(tile: number): void {
    if (this.moveService.moveTile(this.board, tile)) {
      this.moves += 1;
      this.validate();
    }
  }
}
