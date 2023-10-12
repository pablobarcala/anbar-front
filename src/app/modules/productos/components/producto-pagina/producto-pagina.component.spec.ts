import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductoPaginaComponent } from './producto-pagina.component';

describe('ProductoPaginaComponent', () => {
  let component: ProductoPaginaComponent;
  let fixture: ComponentFixture<ProductoPaginaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductoPaginaComponent]
    });
    fixture = TestBed.createComponent(ProductoPaginaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
