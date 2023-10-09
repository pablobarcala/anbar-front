import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Pregunta } from 'src/app/interfaces/Pregunta';
import { PreguntasService } from 'src/app/services/preguntas.service';

@Component({
  selector: 'app-edit-faq',
  templateUrl: './edit-faq.component.html',
  styleUrls: ['./edit-faq.component.css']
})
export class EditFaqComponent {
  form: FormGroup;
  id: number = 0
  pregunta: Pregunta | undefined = undefined

  constructor(
    private route: ActivatedRoute,
    private preguntasService: PreguntasService,
    private formBuilder: FormBuilder,
    private router: Router
  ){    
    route.params.subscribe(params => {
      this.id = params['id'];
      this.filtrar(this.id)
    })

    this.form = formBuilder.group({
      idpreguntas: [this.id, Validators.required],
      pregunta: ['', Validators.required],
      respuesta: ['', Validators.required]
    })
  }

  filtrar(id: number){
    this.preguntasService.getPreguntas().subscribe((resp: any) => {
      let preguntas: Pregunta[] = resp

      this.pregunta = preguntas.find(pregunta => pregunta.idpreguntas == id)
      this.actualizarForm()
    })
  }

  actualizarForm(){
    if(this.pregunta){
      this.form.patchValue({
        pregunta: this.pregunta.pregunta,
        respuesta: this.pregunta.respuesta
      })
    }
  }

  editPregunta(event: Event) {
    event.preventDefault()

    if(this.form.valid){
      this.preguntasService.editPregunta(this.form.get('idpreguntas')?.value, this.form.value).subscribe(resp => {
        if(resp){
          alert("Se editó correctamente")
          this.router.navigate(['/admin/dashboard/admin-faq'])
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
