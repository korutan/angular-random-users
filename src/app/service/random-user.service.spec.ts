import { TestBed } from '@angular/core/testing';

import { randomUserService } from './random-user.service';

describe('RandomPeopleService', () => {
  let service: randomUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(randomUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
