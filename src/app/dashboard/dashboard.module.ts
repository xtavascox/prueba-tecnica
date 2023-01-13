import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesComponent } from './categories/categories.component';
import { UsersComponent } from './users/users.component';
import { ProductsComponent } from './products/products.component';
import { SearchComponent } from './search/search.component';
import {DashboardRoutingModule} from "./dashboard-routing.module";
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [
    CategoriesComponent,
    UsersComponent,
    ProductsComponent,
    SearchComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
