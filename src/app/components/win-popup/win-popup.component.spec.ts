import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WinPopupComponent } from './win-popup.component';

describe('WinPopupComponent', () => {
  let component: WinPopupComponent;
  let fixture: ComponentFixture<WinPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WinPopupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WinPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
