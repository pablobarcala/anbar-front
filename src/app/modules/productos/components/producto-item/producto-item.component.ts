import { Component, Input } from '@angular/core';
import { Producto } from 'src/app/interfaces/Producto';

@Component({
  selector: 'app-producto-item',
  templateUrl: './producto-item.component.html',
  styleUrls: ['./producto-item.component.css']
})
export class ProductoItemComponent {
  @Input() producto: Producto | undefined = undefined
}
