import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ICategorias } from '../../../interfaces';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-categorias-form',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './categorias-form.component.html',
  styleUrl: './categorias-form.component.scss'
})
export class CategoriasFormComponent {
  @Input() categorias: ICategorias =  {};
  @Input() action = '';
  @Output() callParentEvent: EventEmitter<ICategorias> = new EventEmitter<ICategorias>()

  callEvent() {
    this.callParentEvent.emit(this.categorias);
  }

}
