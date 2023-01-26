import { TestBed } from '@angular/core/testing';

import { PermisosDingresoGuard } from './permisos-dingreso.guard';

describe('PermisosDingresoGuard', () => {
  let guard: PermisosDingresoGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(PermisosDingresoGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
