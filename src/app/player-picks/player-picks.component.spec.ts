import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerPicksComponent } from './player-picks.component';

describe('PlayerPicksComponent', () => {
  let component: PlayerPicksComponent;
  let fixture: ComponentFixture<PlayerPicksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlayerPicksComponent]
    });
    fixture = TestBed.createComponent(PlayerPicksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
