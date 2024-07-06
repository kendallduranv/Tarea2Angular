import { Component, Input, OnChanges, SimpleChanges, inject } from '@angular/core';
import { IProductos } from '../../../interfaces';
import { CommonModule } from '@angular/common';
import { ModalComponent } from '../../modal/modal.component';
import {  ProductFormComponent } from '../productos-form/productos-form.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ProductosService } from '../../../services/productos.service';

@Component({
  selector: 'app-productos-list',
  standalone: true,
  imports: [
    CommonModule,
    ModalComponent,
    ProductFormComponent
  ],
  templateUrl: './productos-list.component.html',
  styleUrl: './productos-list.component.scss'
})
export class ProductListComponent implements OnChanges{
  @Input() itemList: IProductos[] = [];
  @Input() areActionsAvailable: boolean = false;
  public selectedItem: IProductos = {};
  public productosService: ProductosService = inject(ProductosService);

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['areActionsAvailable']) {
      console.log('areActionsAvailable', this.areActionsAvailable);
    }
  }
  
  showDetailModal(item: IProductos, modal: any) {
    this.selectedItem = {...item}
    modal.show();
  }

  handleFormAction(item: IProductos) {
    this.productosService.update(item);
  }

  deleteProducto(item: IProductos) {
    this.productosService.delete(item);
  }

}
