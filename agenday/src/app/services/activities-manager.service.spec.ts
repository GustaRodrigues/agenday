import { TestBed } from '@angular/core/testing';

import { ActivitiesManagerService } from './activities-manager.service';

describe('ActivitiesManagerService', () => {
  let service: ActivitiesManagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActivitiesManagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
