import { Component, Input } from '@angular/core';
import { Producto } from 'src/app/interfaces/Producto';

@Component({
  selector: 'app-destacado-item',
  templateUrl: './destacado-item.component.html',
  styleUrls: ['./destacado-item.component.css']
})
export class DestacadoItemComponent {
  @Input() producto: Producto | undefined = undefined;
}
