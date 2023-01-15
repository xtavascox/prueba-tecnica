import {Component} from '@angular/core';
import {MenuItem} from "primeng/api";

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent {

  items: MenuItem[] = [{
    label: 'Prueba tecnica',
    items: [
      {label: 'Usuarios', icon: 'pi pi-fw pi-user', routerLink: 'users'},
      {label: 'Productos', icon: 'pi pi-fw pi-box', routerLink: 'products'},
      {label: 'Categorias', icon: 'pi pi-fw pi-tags', routerLink: 'categories'}
    ]
  }
  ];
}
