import { TestBed, inject } from '@angular/core/testing';

import { HTTPService } from './Http-service.service';

describe('ServerCallService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HTTPService]
    });
  });

  it('should be created', inject([HTTPService], (service: HTTPService) => {
    expect(service).toBeTruthy();
  }));
});
