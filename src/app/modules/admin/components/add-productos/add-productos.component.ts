import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Categoria } from 'src/app/interfaces/Categoria';
import { CategoriasService } from 'src/app/services/categorias.service';
import { ProductosService } from 'src/app/services/productos.service';

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
    private categoriaService: CategoriasService,
    private productosService: ProductosService,
    private router: Router
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

  guardarProducto(event: Event){
    event.preventDefault()

    if(this.form.valid){
      this.productosService.addProducto(this.form.value).subscribe(resp => {
        if(resp){
          alert("Se creó correctamente")
          this.router.navigate(['/admin/dashboard/admin-productos'])
          .then(() => window.location.reload());
        } else {
          alert("Hubo un error")
        }
      })
    } else {
      this.form.markAllAsTouched()
    }
  }
}
