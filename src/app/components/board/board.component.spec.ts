import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardComponent } from './board.component';

describe('BoardComponent', () => {
  let component: BoardComponent;
  let fixture: ComponentFixture<BoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BoardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should validate', () => {
    expect(fixture.componentInstance.win).toEqual(false);
    fixture.componentInstance.board = [
      [1, 2, 3, 4],
      [5, 6, 7, 8],
      [9, 10, 11, 12],
      [13, 14, 15, 16],
    ];
    fixture.componentInstance.validate();
    expect(fixture.componentInstance.win).toEqual(true);
  });

  it('should shuffle', () => {
    let board = [
      [1, 2, 3, 4],
      [5, 6, 7, 8],
      [9, 10, 11, 12],
      [13, 14, 15, 16],
    ];
    fixture.componentInstance.shuffle(0);
    expect(board.flat()).not.toEqual(fixture.componentInstance.board.flat());
  });

  it('should increase a move if move is valid', () => {
    fixture.componentInstance.board = [
      [1, 2, 3, 4],
      [5, 6, 7, 8],
      [9, 10, 11, 12],
      [13, 14, 15, 16],
    ];
    expect(fixture.componentInstance.moves).toEqual(0);
    fixture.componentInstance.moveTile(1);
    expect(fixture.componentInstance.moves).toEqual(0);
    fixture.componentInstance.moveTile(12);
    expect(fixture.componentInstance.moves).toEqual(1);
  });
});
