import { TestBed } from '@angular/core/testing';

import { ReceptionProfileService } from './reception-profile.service';

describe('ReceptionProfileService', () => {
  let service: ReceptionProfileService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReceptionProfileService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
