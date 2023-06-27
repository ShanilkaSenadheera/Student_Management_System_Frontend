import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeClassFeesComponent } from './change-class-fees.component';

describe('ChangeClassFeesComponent', () => {
  let component: ChangeClassFeesComponent;
  let fixture: ComponentFixture<ChangeClassFeesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChangeClassFeesComponent]
    });
    fixture = TestBed.createComponent(ChangeClassFeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
