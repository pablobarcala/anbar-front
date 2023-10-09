import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
    private preguntaService: PreguntasService
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
        } else {
          alert("Hubo un error")
        }
      })
    } else {
      this.form.markAllAsTouched()
    }
  }
}
