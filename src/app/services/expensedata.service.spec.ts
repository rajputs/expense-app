import { TestBed, inject } from '@angular/core/testing';

import { ExpensedataService } from './expensedata.service';

describe('ExpensedataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ExpensedataService]
    });
  });

  it('should ...', inject([ExpensedataService], (service: ExpensedataService) => {
    expect(service).toBeTruthy();
  }));
});
