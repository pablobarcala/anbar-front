import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UltimosComponent } from './ultimos.component';

describe('UltimosComponent', () => {
  let component: UltimosComponent;
  let fixture: ComponentFixture<UltimosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UltimosComponent]
    });
    fixture = TestBed.createComponent(UltimosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
