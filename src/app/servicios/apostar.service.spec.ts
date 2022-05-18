import { TestBed } from '@angular/core/testing';

import { ApostarService } from './apostar.service';

describe('ApostarService', () => {
  let service: ApostarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApostarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('"maxNumApostar" number is same to 8', () => {
    expect(service.maxNumApostar).toEqual(8);
  });

  it('"ganador" array length is greater than or equal to 0', () => {
    expect(service.ganador.length).toBeGreaterThanOrEqual(0);
  });

  it('"numerosApostar" array length is less than or equal to 8', () => {
    expect(service.numerosApostar.length).toBeLessThanOrEqual(8);
  });

  it('"valorApostar" number greater than to 0', () => {
    expect(service.numerosApostar.length).toBeGreaterThanOrEqual(0);
  });

  it('"ganancia" number is equal to 1.5', () => {
    expect(service.ganancia).toEqual(1.5);
  });

});
