import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DestacadoItemComponent } from './destacado-item.component';

describe('DestacadoItemComponent', () => {
  let component: DestacadoItemComponent;
  let fixture: ComponentFixture<DestacadoItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DestacadoItemComponent]
    });
    fixture = TestBed.createComponent(DestacadoItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
