import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAcercaDeComponent } from './admin-acerca-de.component';

describe('AdminAcercaDeComponent', () => {
  let component: AdminAcercaDeComponent;
  let fixture: ComponentFixture<AdminAcercaDeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminAcercaDeComponent]
    });
    fixture = TestBed.createComponent(AdminAcercaDeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
