import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SideBarComponent} from './side-bar/side-bar.component';
import {MenuModule} from "primeng/menu";
import {TableComponent} from './table/table.component';
import {PrimeNgModule} from "../../prime-ng/prime-ng.module";
import { SearchComponent } from './search/search.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    SideBarComponent,
    TableComponent,
    SearchComponent,

  ],
  exports: [
    SideBarComponent,
    TableComponent,
    SearchComponent
  ],
  imports: [
    CommonModule,
    MenuModule,
    PrimeNgModule,
    FormsModule,
  ]
})
export class SharedModule {
}
