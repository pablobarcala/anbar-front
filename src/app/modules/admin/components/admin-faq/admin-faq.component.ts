import { Component } from '@angular/core';
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
    private preguntaService: PreguntasService
  ){
    preguntaService.getPreguntas().subscribe((preguntas: any) => this.preguntas = preguntas)
  }
}
