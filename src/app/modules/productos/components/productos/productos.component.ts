import { Component } from '@angular/core';
import { Categoria } from 'src/app/interfaces/Categoria';
import { CategoriasService } from 'src/app/services/categorias.service';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent {
  categorias: Categoria[] = []

  navOpcion: string = ""

  constructor(
    private menuService: MenuService,
    private categoriasService: CategoriasService  
  ){
    categoriasService.getCategorias().subscribe((categorias: any) => this.categorias = categorias)
    menuService.getOpcion().subscribe(opcion => this.navOpcion = opcion)
  }

  cambiarOpcion(opcion: string){
    this.menuService.cambiarOpcion(opcion)
  }
}
