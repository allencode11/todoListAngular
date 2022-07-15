import { TestBed } from '@angular/core/testing';

import { ServiceService } from './card.service.service';

describe('Card.ServiceService', () => {
  let service: ServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
