import { TestBed } from '@angular/core/testing';

import { ProductoService} from './productos.service';

describe('ProductoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProductoService = TestBed.get(ProductoService);
    expect(service).toBeTruthy();
  });
});
