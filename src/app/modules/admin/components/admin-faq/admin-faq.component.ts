import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Pregunta } from 'src/app/interfaces/Pregunta';
import { PreguntasService } from 'src/app/services/preguntas.service';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmacionComponent } from 'src/app/components/confirmacion/confirmacion.component';

@Component({
  selector: 'app-admin-faq',
  templateUrl: './admin-faq.component.html',
  styleUrls: ['./admin-faq.component.css']
})
export class AdminFaqComponent {
  preguntas: Pregunta[] = []

  constructor(
    private preguntaService: PreguntasService,
    private router: Router,
    private dialog: MatDialog 
  ){
    preguntaService.getPreguntas().subscribe((preguntas: any) => this.preguntas = preguntas)
  }

  deletePregunta(id: any) {
    const dialogRef = this.dialog.open(ConfirmacionComponent, {
      data: {elemento: "Pregunta"}
    })

    dialogRef.afterClosed().subscribe((response: any) => {
      if(response){
        this.preguntaService.deletePregunta(id).subscribe((resp) => {
          if(resp){
            alert("Se eliminó correctamente")
            this.router.navigate(['/admin/dashboard/admin-faq']).then(() => window.location.reload())
          } else {
            alert("Hubo un error")
          }
        });
      }
    })
  }
}
