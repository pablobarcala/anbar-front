import { Component } from '@angular/core';
import { Storage, getDownloadURL, ref, uploadBytes } from '@angular/fire/storage';
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
  imagenUrl: string = ''
  cargarFoto: boolean = false

  constructor(
    private formBuilder: FormBuilder,
    private categoriaService: CategoriasService,
    private productosService: ProductosService,
    private router: Router,
    private storage: Storage
  ){
    categoriaService.getCategorias().subscribe((categorias: any) => this.categorias = categorias)
    this.form = formBuilder.group({
      nombre: ['', Validators.required],
      precio: [0, Validators.required],
      oferta: [],
      cantidad: [0, Validators.required],
      categoria: ['', Validators.required],
      imagen: [''],
      descripcion: ['']
    })
  }

  getImage(event: any){
    this.cargarFoto = true
    const file = event.target.files[0]

    const imgRef = ref(this.storage, `productos/${file.name}`)

    uploadBytes(imgRef, file)
    .then(async () => {
      this.imagenUrl = await getDownloadURL(imgRef)
      alert("Imagen guardada")
    })
  }

  guardarProducto(event: Event){
    event.preventDefault()

    if(this.form.valid){
      if(this.imagenUrl != '' && this.cargarFoto){
        this.form.patchValue({
          imagen: this.imagenUrl
        })
        this.productosService.addProducto(this.form.value, this.form.get('categoria')?.value).subscribe(resp => {
          if(resp){
            alert("Se creó correctamente")
            this.router.navigate(['/admin/dashboard/admin-productos'])
            .then(() => window.location.reload());
          } else {
            alert("Hubo un error")
          }
        })
      } else if (!this.cargarFoto){
        this.productosService.addProducto(this.form.value, this.form.get('categoria')?.value).subscribe(resp => {
          if(resp) {
            alert("Se creó correctamente")
            this.router.navigate(['/admin/dashboard/admin-productos'])
            .then(() => window.location.reload())
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
