import { Component } from '@angular/core';
import { Storage, getDownloadURL, ref, uploadBytes } from '@angular/fire/storage';
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
  editarFoto: boolean = false
  imagenUrl: string = ''

  constructor(
    private route: ActivatedRoute, 
    private productoService: ProductosService,
    private formBuilder: FormBuilder,
    private categoriasService: CategoriasService,
    private router: Router,
    private storage: Storage
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
      oferta: [],
      cantidad: [0, Validators.required],
      categoria: [0, Validators.required],
      imagen: [''],
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
        oferta: this.producto.oferta,
        cantidad: this.producto.cantidad,
        categoria: this.producto.categoria.idcategorias,
        imagen: this.producto.imagen,
        descripcion: this.producto.descripcion,
      })
    }
  }

  getImage(event: any){
    this.editarFoto = true
    const file = event.target.files[0]

    const imgRef = ref(this.storage, `productos/${file.name}`)

    uploadBytes(imgRef, file)
    .then(async () => {
      this.imagenUrl = await getDownloadURL(imgRef)
      alert("Imagen guardada")
    })
  }

  editarProducto(event: Event){
    event.preventDefault()

    if(this.form.valid){
      if(this.imagenUrl != '' && this.editarFoto){
        this.form.patchValue({
          imagen: this.imagenUrl
        })
        this.productoService.editarProducto(this.form.get('idproductos')?.value, this.form.get('categoria')?.value, this.form.value).subscribe((resp:any) => {
          if(resp){
            alert("Se editó correctamente")
            this.router.navigate(['/admin/dashboard/admin-productos'])
            .then(() => window.location.reload());
          } else {
            alert("Hubo un error")
          }
        })
      } else if(!this.editarFoto) {
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
        alert("Espere")
      }
    } else {
      this.form.markAllAsTouched()
    }
  }
}
