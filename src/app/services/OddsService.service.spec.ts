/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { OddsServiceService } from './OddsService.service';

describe('Service: OddsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OddsServiceService]
    });
  });

  it('should ...', inject([OddsServiceService], (service: OddsServiceService) => {
    expect(service).toBeTruthy();
  }));
});
