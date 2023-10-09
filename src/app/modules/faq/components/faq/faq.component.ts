import { Component } from '@angular/core';
import { Pregunta } from 'src/app/interfaces/Pregunta';
import { PreguntasService } from 'src/app/services/preguntas.service';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent {
  preguntas: Pregunta[] = []

  constructor(private preguntaService: PreguntasService){
    preguntaService.getPreguntas().subscribe((preguntas: any) => this.preguntas = preguntas)
  }
}
