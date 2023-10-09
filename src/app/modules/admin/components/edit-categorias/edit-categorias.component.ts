import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Categoria } from 'src/app/interfaces/Categoria';
import { CategoriasService } from 'src/app/services/categorias.service';

@Component({
  selector: 'app-edit-categorias',
  templateUrl: './edit-categorias.component.html',
  styleUrls: ['./edit-categorias.component.css']
})
export class EditCategoriasComponent {
  form: FormGroup;
  categoria: Categoria | undefined = undefined
  id: number = 0

  constructor(
    private categoriaService: CategoriasService,
    private route: ActivatedRoute, 
    private formBuilder: FormBuilder
  ){
    route.params.subscribe(params => {
      this.id = params['id']
      this.filtrar(this.id)
    })
    this.form = formBuilder.group({
      idcategorias: [this.id, Validators.required],
      nombre: ['', Validators.required]
    })
  }

  filtrar(id: number){
    this.categoriaService.getCategorias().subscribe((resp: any) => {
      let categorias: Categoria[] = resp
      
      this.categoria = categorias.find(categoria => categoria.idcategorias == id)
    })
  }
}
