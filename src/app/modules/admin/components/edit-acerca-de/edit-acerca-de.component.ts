import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Nosotros } from 'src/app/interfaces/Nosotros';
import { NosotrosService } from 'src/app/services/nosotros.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-acerca-de',
  templateUrl: './edit-acerca-de.component.html',
  styleUrls: ['./edit-acerca-de.component.css']
})
export class EditAcercaDeComponent {
  nosotros: Nosotros | undefined = undefined;
  id: number = 0
  form: FormGroup

  constructor(
    private route: ActivatedRoute, 
    private nosotrosService: NosotrosService,
    private formBuilder: FormBuilder
  ){
    route.params.subscribe(params => {
      this.id = params['id']
      this.filtrar(this.id)
    })

    this.form = formBuilder.group({
      idnosotros: [this.id, Validators.required],
      nombre: [''],
      apellido: [''],
      empresa: ['', Validators.required],
      informacion: ['', Validators.required],
      imagen: [''],
      telefono: [''],
      mail: ['', Validators.required]
    })
  }
  
  filtrar(id: number){
    this.nosotrosService.getNosotros().subscribe((resp: any) => {
      let nosotros: Nosotros[] = resp
  
      this.nosotros = nosotros.find(nosotros => nosotros.idnosotros == id)
    })
  }

  editarNosotros(event: Event) {
    event.preventDefault()

    if(this.form.valid) {
      this.nosotrosService.editarNosotros(this.form.get('idnosotros')?.value, this.form.value).subscribe(resp => {
        if(resp) {
          alert("Se editó correctamente")
        } else {
          alert("Hubo un error")
        }
      })
    } else {
      this.form.markAllAsTouched()
    }
  }
}
