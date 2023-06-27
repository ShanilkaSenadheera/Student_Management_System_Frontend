import { TestBed } from '@angular/core/testing';

import { StudentOperationsService } from './student-operations.service';

describe('StudentOperationsService', () => {
  let service: StudentOperationsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudentOperationsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
