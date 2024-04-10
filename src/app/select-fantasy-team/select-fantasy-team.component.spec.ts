import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectFantasyTeamComponent } from './select-fantasy-team.component';

describe('SelectFantasyTeamComponent', () => {
  let component: SelectFantasyTeamComponent;
  let fixture: ComponentFixture<SelectFantasyTeamComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SelectFantasyTeamComponent]
    });
    fixture = TestBed.createComponent(SelectFantasyTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
