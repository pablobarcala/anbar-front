import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPreguntasComponent } from './add-preguntas.component';

describe('AddPreguntasComponent', () => {
  let component: AddPreguntasComponent;
  let fixture: ComponentFixture<AddPreguntasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddPreguntasComponent]
    });
    fixture = TestBed.createComponent(AddPreguntasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
