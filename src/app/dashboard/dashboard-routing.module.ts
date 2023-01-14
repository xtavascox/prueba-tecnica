import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {CategoriesComponent} from "./components/categories/categories.component";
import {ProductsComponent} from "./components/products/products.component";
import {SearchComponent} from "./components/search/search.component";
import {UsersComponent} from "./components/users/users.component";
import {HomeComponent} from "./components/home/home.component";
import {DashboardComponent} from "./dashboard.component";

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent
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
        path: '**',
        redirectTo: 'home'
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
