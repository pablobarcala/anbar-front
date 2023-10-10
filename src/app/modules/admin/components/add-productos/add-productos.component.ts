import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Categoria } from 'src/app/interfaces/Categoria';
import { CategoriasService } from 'src/app/services/categorias.service';

@Component({
  selector: 'app-add-productos',
  templateUrl: './add-productos.component.html',
  styleUrls: ['./add-productos.component.css']
})
export class AddProductosComponent {
  form: FormGroup
  categorias: Categoria[] = []

  constructor(
    private formBuilder: FormBuilder,
    private categoriaService: CategoriasService
  ){
    categoriaService.getCategorias().subscribe((categorias: any) => this.categorias = categorias)
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
