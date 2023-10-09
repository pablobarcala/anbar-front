import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Pregunta } from 'src/app/interfaces/Pregunta';
import { PreguntasService } from 'src/app/services/preguntas.service';

@Component({
  selector: 'app-admin-faq',
  templateUrl: './admin-faq.component.html',
  styleUrls: ['./admin-faq.component.css']
})
export class AdminFaqComponent {
  preguntas: Pregunta[] = []

  constructor(
    private preguntaService: PreguntasService,
    private router: Router
  ){
    preguntaService.getPreguntas().subscribe((preguntas: any) => this.preguntas = preguntas)
  }

  deletePregunta(id: any) {
    this.preguntaService.deletePregunta(id).subscribe(resp => {
      if(resp){
        alert("La pregunta se eliminó correctamente")
        this.router.navigate(['/admin/dashboard/admin-faq'])
        .then(() => window.location.reload());
      } else {
        alert("Hubo un error")
      }
    })
  }
}
