import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PreguntasService } from 'src/app/services/preguntas.service';

@Component({
  selector: 'app-add-preguntas',
  templateUrl: './add-preguntas.component.html',
  styleUrls: ['./add-preguntas.component.css']
})
export class AddPreguntasComponent {
  form: FormGroup

  constructor(
    private formBuilder: FormBuilder,
    private preguntaService: PreguntasService,
    private router: Router
  ){
    this.form = formBuilder.group({
      pregunta: ['', Validators.required],
      respuesta: ['', Validators.required]
    })
  }

  guardarPregunta(event: Event){
    event.preventDefault()

    if(this.form.valid){
      this.preguntaService.addPregunta(this.form.value).subscribe(resp => {
        if(resp) {
          alert("Se creó correctamente")
          this.router.navigate(['/admin/dashboard/admin-faq'])
          .then(() => window.location.reload())
        } else {
          alert("Hubo un error")
        }
      })
    } else {
      this.form.markAllAsTouched()
    }
  }
}
