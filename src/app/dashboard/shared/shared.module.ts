import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SideBarComponent} from './side-bar/side-bar.component';
import {MenuModule} from "primeng/menu";
import {TableComponent} from './table/table.component';
import {PrimeNgModule} from "../../prime-ng/prime-ng.module";


@NgModule({
  declarations: [
    SideBarComponent,
    TableComponent
  ],
  exports: [
    SideBarComponent,
    TableComponent
  ],
  imports: [
    CommonModule,
    MenuModule,
    PrimeNgModule
  ]
})
export class SharedModule {
}
