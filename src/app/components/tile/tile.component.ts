import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'tile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tile.component.html',
  styleUrl: './tile.component.scss',
})
export class TileComponent implements OnChanges {
  @Input()
  id: number = 0;

  left: number = 0;
  top: number = 0;

  ngOnChanges(): void {
    this.top = (Math.floor((this.id - 1) / 4) * 100) / 3;
    this.left = (((this.id - 1) % 4) * 100) / 3;
  }
}
