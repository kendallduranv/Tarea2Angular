import { Component, Input, OnChanges, SimpleChanges, inject } from '@angular/core';
import { ICategorias } from '../../../interfaces';
import { CommonModule } from '@angular/common';
import { ModalComponent } from '../../modal/modal.component';
import { CategoriasFormComponent } from '../categorias-form/categorias-form.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CategoriasService } from '../../../services/categorias.service';

@Component({
  selector: 'app-categorias-list',
  standalone: true,
  imports: [
    CommonModule,
    ModalComponent,
    CategoriasFormComponent
  ],
  templateUrl: './categorias-list.component.html',
  styleUrl: './categorias-list.component.scss'
})
export class CategoriasListComponent implements OnChanges{
  @Input() itemList: ICategorias[] = [];
  @Input() areActionsAvailable: boolean = false;
  public selectedItem: ICategorias = {};
  public categoriasService: CategoriasService = inject(CategoriasService);


  ngOnChanges(changes: SimpleChanges): void {
    if(changes['areActionsAvailable']) {
      console.log('areActionsAvailable', this.areActionsAvailable);
    }
  }
  
  showDetailModal(item: ICategorias, modal: any) {
    this.selectedItem = {...item}
    modal.show();
  }

  handleFormAction(item: ICategorias) {
    this.categoriasService.update(item);
  }

  deleteCategoria(item: ICategorias) {
    this.categoriasService.delete(item);
  }

}
