import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesComponent } from './categories/categories.component';
import { UsersComponent } from './users/users.component';
import { ProductsComponent } from './products/products.component';
import { SearchComponent } from './search/search.component';
import {DashboardRoutingModule} from "./dashboard-routing.module";



@NgModule({
  declarations: [
    CategoriesComponent,
    UsersComponent,
    ProductsComponent,
    SearchComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
