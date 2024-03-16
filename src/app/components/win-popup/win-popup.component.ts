import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'win-popup',
  standalone: true,
  imports: [],
  templateUrl: './win-popup.component.html',
  styleUrl: './win-popup.component.scss',
})
export class WinPopupComponent {
  @Input()
  moves: number = 0;

  @Output()
  newGame = new EventEmitter();
}
