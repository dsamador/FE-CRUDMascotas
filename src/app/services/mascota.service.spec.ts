/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MascotaService } from './mascota.service';

describe('Service: Mascota', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MascotaService]
    });
  });

  it('should ...', inject([MascotaService], (service: MascotaService) => {
    expect(service).toBeTruthy();
  }));
});
