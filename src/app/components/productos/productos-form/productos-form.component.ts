import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ICategorias, IProductos } from '../../../interfaces';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-productos-form',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './productos-form.component.html',
  styleUrl: './productos-form.component.scss'
})
export class ProductFormComponent {
  @Input() producto: IProductos =  {
    categoria: {id: undefined} as ICategorias
  };
  @Input() action = '';
  @Output() callParentEvent: EventEmitter<IProductos> = new EventEmitter<IProductos>()



  callEvent() {
    this.callParentEvent.emit(this.producto);
  }

  getCategoriaId(): any  {
    return this.producto.categoria ? this.producto.categoria.id || '' : '';
  }

  // getCategoriaId(): number | undefined {
  //   return this.producto.categoria ? this.producto.categoria.id : undefined;
  // }

  setCategoriaId(value: string) {
    if (this.producto.categoria) {
      this.producto.categoria.id = Number(value);
    } else {
      this.producto.categoria = { id: Number(value) } as ICategorias;
    }
  }

}
