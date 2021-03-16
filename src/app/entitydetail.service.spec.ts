import { TestBed } from '@angular/core/testing';

import { EntitydetailService } from './entitydetail.service';

describe('EntitydetailService', () => {
  let service: EntitydetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EntitydetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
