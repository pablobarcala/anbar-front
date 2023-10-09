import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Producto } from 'src/app/interfaces/Producto';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-edit-productos',
  templateUrl: './edit-productos.component.html',
  styleUrls: ['./edit-productos.component.css']
})
export class EditProductosComponent {
  producto: Producto | undefined = undefined;
  id: number = 0
  form: FormGroup

  constructor(
    private route: ActivatedRoute, 
    private productoService: ProductosService,
    private formBuilder: FormBuilder
  ){
    route.params.subscribe(params => {
      this.id = params['id']
      this.filtrar(this.id)
    })
    this.form = formBuilder.group({
      idproductos: [this.id, Validators.required],
      nombre: ['', Validators.required],
      precio: [0, Validators.required],
      cantidad: [0, Validators.required],
      categorias: [[], Validators.required],
      imagen: ['', Validators.required],
      descripcion: ['']
    })
  }
  
  filtrar(id: number){
    this.productoService.getProductos().subscribe((resp: any) => {
      let productos: Producto[] = resp
  
      this.producto = productos.find(producto => producto.idproductos == id)
      this.actualizarForm()
    })
  }

  actualizarForm(){
    if(this.producto){
      this.form.patchValue({
        nombre: this.producto.nombre,
        precio: this.producto.precio,
        cantidad: this.producto.cantidad,
        categorias: this.producto.categorias,
        imagen: this.producto.imagen,
        descripcion: this.producto.descripcion,
      })
    }
  }
}
