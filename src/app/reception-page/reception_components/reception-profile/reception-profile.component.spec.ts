import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceptionProfileComponent } from './reception-profile.component';

describe('ReceptionProfileComponent', () => {
  let component: ReceptionProfileComponent;
  let fixture: ComponentFixture<ReceptionProfileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReceptionProfileComponent]
    });
    fixture = TestBed.createComponent(ReceptionProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
