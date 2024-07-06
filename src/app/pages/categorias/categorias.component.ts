import { Component, OnInit, inject } from '@angular/core';
import { LoaderComponent } from '../../components/loader/loader.component';
import { ICategorias, IGame } from '../../interfaces';
import { CommonModule } from '@angular/common';
import { ModalComponent } from '../../components/modal/modal.component';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { CategoriasService } from '../../services/categorias.service';
import { CategoriasListComponent } from '../../components/categorias/categorias-list/categorias-list.component';
import { CategoriasFormComponent } from '../../components/categorias/categorias-form/categorias-form.component';

@Component({
  selector: 'app-categorias',
  standalone: true,
  imports: [
    CategoriasListComponent,
    LoaderComponent,
    CommonModule,
    ModalComponent,
    CategoriasFormComponent
  ],
  templateUrl: './categorias.component.html',
  styleUrl: './categorias.component.scss'
})
export class CategoriasComponent implements OnInit{
  public categoriasService: CategoriasService = inject(CategoriasService);
  public route: ActivatedRoute = inject(ActivatedRoute);
  public areActionsAvailable: boolean = false;
  public authService: AuthService =  inject(AuthService);
  public routeAuthorities: string[] =  [];

  ngOnInit(): void {
    this.categoriasService.getAll();
    this.route.data.subscribe( data => {
      this.routeAuthorities = data['authorities'] ? data['authorities'] : [];
      this.areActionsAvailable = this.authService.areActionsAvailable(this.routeAuthorities);
    });
  }

  handleFormAction(item: ICategorias) {
    this.categoriasService.save(item);
  }


}
