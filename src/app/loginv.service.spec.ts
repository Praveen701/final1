import { TestBed } from '@angular/core/testing';

import { LoginvService } from './loginv.service';

describe('LoginvService', () => {
  let service: LoginvService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginvService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
