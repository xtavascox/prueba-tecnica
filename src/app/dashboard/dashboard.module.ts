import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CategoriesComponent} from './components/categories/categories.component';
import {UsersComponent} from './components/users/users.component';
import {ProductsComponent} from './components/products/products.component';
import {SearchComponent} from './components/search/search.component';
import {DashboardRoutingModule} from "./dashboard-routing.module";
import {HomeComponent} from './components/home/home.component';
import {SharedModule} from "./shared/shared.module";
import {DashboardComponent} from './dashboard.component';
import {PrimeNgModule} from "../prime-ng/prime-ng.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ModalProductsComponent} from './components/products/components/modal-products/modal-products.component';
import {ModalModule} from 'ngx-bootstrap/modal';
import { ModalUsersComponent } from './components/users/components/modal-users/modal-users.component';
import {ModalCategoriesComponent} from "./components/categories/components/modal-categories/modal-categories.component";

@NgModule({
  declarations: [
    CategoriesComponent,
    UsersComponent,
    ProductsComponent,
    SearchComponent,
    HomeComponent,
    DashboardComponent,
    ModalProductsComponent,
    ModalUsersComponent,
    ModalCategoriesComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
    PrimeNgModule,
    ReactiveFormsModule,
    FormsModule,
    ModalModule.forRoot()
  ]
})
export class DashboardModule {
}
