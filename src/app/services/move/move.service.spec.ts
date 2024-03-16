import { TestBed } from '@angular/core/testing';

import { MoveService } from './move.service';

describe('MoveService', () => {
  let service: MoveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MoveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should move a tile', () => {
    let board = [
      [1, 2, 3, 4],
      [5, 6, 7, 8],
      [9, 10, 11, 12],
      [13, 14, 15, 16],
    ];

    let checkBoard = [
      [1, 2, 3, 4],
      [5, 6, 7, 8],
      [9, 10, 11, 16],
      [13, 14, 15, 12],
    ];

    service.moveTile(board, 12);

    expect(board.flat()).toEqual(checkBoard.flat());
  });

  it('should get board index', () => {
    let board = [
      [1, 2, 3, 4],
      [5, 6, 7, 8],
      [9, 10, 11, 12],
      [13, 14, 15, 16],
    ];

    expect(service.getBoardIndex(board, 11)).toEqual([2, 2]);
  });

  it('should swap tiles', () => {
    let board = [
      [1, 2, 3, 4],
      [5, 6, 7, 8],
      [9, 10, 11, 12],
      [13, 14, 15, 16],
    ];

    let checkBoard = [
      [16, 2, 3, 4],
      [5, 6, 7, 8],
      [9, 10, 11, 12],
      [13, 14, 15, 1],
    ];

    service.swapTiles(board, 1, 16);

    expect(board.flat()).toEqual(checkBoard.flat());
  });
});
