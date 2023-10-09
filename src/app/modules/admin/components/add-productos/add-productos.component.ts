import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-productos',
  templateUrl: './add-productos.component.html',
  styleUrls: ['./add-productos.component.css']
})
export class AddProductosComponent {
  form: FormGroup

  constructor(
    private formBuilder: FormBuilder
  ){
    this.form = formBuilder.group({
      nombre: ['', Validators.required],
      precio: [0, Validators.required],
      cantidad: [0, Validators.required],
      categorias: [[], Validators.required],
      imagen: ['', Validators.required],
      descripcion: ['']
    })
  }
}
