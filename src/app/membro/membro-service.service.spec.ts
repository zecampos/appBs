import { TestBed, inject } from '@angular/core/testing';

import { MembroServiceService } from './membro-service.service';

describe('MembroServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MembroServiceService]
    });
  });

  it('should be created', inject([MembroServiceService], (service: MembroServiceService) => {
    expect(service).toBeTruthy();
  }));
});
