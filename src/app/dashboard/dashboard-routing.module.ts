import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {CategoriesComponent} from "./categories/categories.component";
import {ProductsComponent} from "./products/products.component";
import {SearchComponent} from "./search/search.component";
import {UsersComponent} from "./users/users.component";
import {HomeComponent} from "./home/home.component";

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path:'home',
        component:HomeComponent
      },
      {
        path: 'categories',
        component: CategoriesComponent
      },
      {
        path: 'products',
        component: ProductsComponent
      },
      {
        path: 'search',
        component: SearchComponent
      },
      {
        path: 'users',
        component: UsersComponent
      },
      {
        path:'**',
        redirectTo:'home'
      }

    ]
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class DashboardRoutingModule {
}
