import { TestBed } from '@angular/core/testing';

import { StorageOfflineService } from './storage-offline.service';

describe('StorageOfflineService', () => {
  let service: StorageOfflineService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StorageOfflineService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
