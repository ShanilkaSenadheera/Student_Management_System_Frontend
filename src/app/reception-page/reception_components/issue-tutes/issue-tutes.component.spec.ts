import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IssueTutesComponent } from './issue-tutes.component';

describe('IssueTutesComponent', () => {
  let component: IssueTutesComponent;
  let fixture: ComponentFixture<IssueTutesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IssueTutesComponent]
    });
    fixture = TestBed.createComponent(IssueTutesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
