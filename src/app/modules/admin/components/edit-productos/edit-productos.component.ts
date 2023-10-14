import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Categoria } from 'src/app/interfaces/Categoria';
import { Producto } from 'src/app/interfaces/Producto';
import { CategoriasService } from 'src/app/services/categorias.service';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-edit-productos',
  templateUrl: './edit-productos.component.html',
  styleUrls: ['./edit-productos.component.css']
})
export class EditProductosComponent {
  producto: Producto | undefined = undefined;
  categorias: Categoria[] = []
  id: number = 0
  form: FormGroup

  constructor(
    private route: ActivatedRoute, 
    private productoService: ProductosService,
    private formBuilder: FormBuilder,
    private categoriasService: CategoriasService,
    private router: Router
  ){
    categoriasService.getCategorias().subscribe((categorias: any) => this.categorias = categorias)
    route.params.subscribe(params => {
      this.id = params['id']
      this.filtrar(this.id)
    })
    this.form = formBuilder.group({
      idproductos: [this.id, Validators.required],
      nombre: ['', Validators.required],
      precio: [0, Validators.required],
      cantidad: [0, Validators.required],
      categoria: [0, Validators.required],
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
        categoria: this.producto.categoria.idcategorias,
        imagen: this.producto.imagen,
        descripcion: this.producto.descripcion,
      })
    }
  }

  editarProducto(event: Event){
    event.preventDefault()

    if(this.form.valid){
      this.productoService.editarProducto(this.form.get('idproductos')?.value, this.form.get('categoria')?.value, this.form.value).subscribe((resp:any) => {
        if(resp){
          alert("Se editó correctamente")
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
