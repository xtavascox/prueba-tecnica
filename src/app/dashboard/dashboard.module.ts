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
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    CategoriesComponent,
    UsersComponent,
    ProductsComponent,
    SearchComponent,
    HomeComponent,
    DashboardComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
    PrimeNgModule,
    ReactiveFormsModule
  ]
})
export class DashboardModule {
}
