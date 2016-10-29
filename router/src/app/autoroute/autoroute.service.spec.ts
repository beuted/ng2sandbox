/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AutorouteService } from './autoroute.service';

describe('Service: Autoroute', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AutorouteService]
    });
  });

  it('should ...', inject([AutorouteService], (service: AutorouteService) => {
    expect(service).toBeTruthy();
  }));
});
