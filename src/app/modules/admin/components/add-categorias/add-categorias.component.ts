import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CategoriasService } from 'src/app/services/categorias.service';

@Component({
  selector: 'app-add-categorias',
  templateUrl: './add-categorias.component.html',
  styleUrls: ['./add-categorias.component.css']
})
export class AddCategoriasComponent {
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private categoriaService: CategoriasService,
    private router: Router
  ){
    this.form = formBuilder.group({
      nombre: ['', Validators.required]
    })
  }

  guardarCategoria(event: Event){
    event.preventDefault()

    if(this.form.valid){
      this.categoriaService.addCategoria(this.form.value).subscribe(resp => {
        if(resp) {
          alert("Se creó correctamente")
          this.router.navigate(['/admin/dashboard/admin-categorias'])
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
