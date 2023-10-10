import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from 'src/app/interfaces/Producto';
import { ProductosService } from 'src/app/services/productos.service';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmacionComponent } from 'src/app/components/confirmacion/confirmacion.component';
import { Categoria } from 'src/app/interfaces/Categoria';
import { CategoriasService } from 'src/app/services/categorias.service';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-admin-productos',
  templateUrl: './admin-productos.component.html',
  styleUrls: ['./admin-productos.component.css']
})
export class AdminProductosComponent {
  productos: Producto[] = [
    {
      nombre: "Mesa ratona",
      precio: 3000,
      cantidad: 5,
      categorias: [
        {
          nombre: "Muebles"
        }, 
        {
          nombre: "Mesa"
        }
      ],
      imagen: "link",
      descripcion: ""
    }
  ]
  categorias: Categoria[] = []

  constructor(
    private productosService: ProductosService,
    private router: Router,
    private dialog: MatDialog,
    private categoriaService: CategoriasService,
    private menuService: MenuService
  ){
    categoriaService.getCategorias().subscribe((categorias: any) => this.categorias = categorias)
    productosService.getProductos().subscribe((productos: any) => this.productos = productos)
  }

  deleteProducto(id: any){
    const dialogRef = this.dialog.open(ConfirmacionComponent, {
      data: {elemento: "Producto"}
    })

    dialogRef.afterClosed().subscribe((response: any) => {
      if(response) {
        this.productosService.deleteProducto(id).subscribe(resp => {
          if(resp) {
            alert("El producto se eliminó correctamente")
            this.router.navigate(['/admin/dashboard/admin-productos'])
            .then(() => window.location.reload());
          } else {
            alert("Hubo un error")
          }
        })
      }
    })
  }
}
