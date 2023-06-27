import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceptionNotificationsComponent } from './reception-notifications.component';

describe('ReceptionNotificationsComponent', () => {
  let component: ReceptionNotificationsComponent;
  let fixture: ComponentFixture<ReceptionNotificationsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReceptionNotificationsComponent]
    });
    fixture = TestBed.createComponent(ReceptionNotificationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
