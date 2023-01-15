import {Component} from '@angular/core';
import {MenuItem} from "primeng/api";

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent {
  //TODO:Cambiar iconos
  items: MenuItem[] = [{
    label: 'Prueba tecnica',
    items: [
      {label: 'Usuarios', icon: 'pi pi-fw pi-plus', routerLink: 'users'},
      {label: 'Productos', icon: 'pi pi-fw pi-download', routerLink: 'products'},
      {label: 'Categorias', icon: 'pi pi-fw pi-refresh', routerLink: 'categories'},
      {label: 'Buscar', icon: 'pi pi-fw pi-refresh', routerLink: 'search'}
    ]
  }
  ];
}
