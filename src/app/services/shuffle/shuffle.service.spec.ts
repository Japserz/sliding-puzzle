import { TestBed } from '@angular/core/testing';

import { ShuffleService } from './shuffle.service';

describe('ShuffleService', () => {
  let service: ShuffleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShuffleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should shuffle the board', () => {
    let board = [
      [1, 2, 3, 4],
      [5, 6, 7, 8],
      [9, 10, 11, 12],
      [13, 14, 15, 16],
    ];

    expect(board.flat()).toEqual(
      board.flat().sort(function (a, b) {
        return a - b;
      })
    );

    service.shuffle(3200, board);
    expect(board.flat()).not.toEqual(
      board.flat().sort(function (a, b) {
        return a - b;
      })
    );

    // it should have bottom right empty
    expect(board.flat()[board.flat().length - 1]).toEqual(16);
  });
});
