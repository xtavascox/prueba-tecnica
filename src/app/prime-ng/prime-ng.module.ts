import {NgModule} from '@angular/core';
import {ButtonModule} from "primeng/button";
import {CardModule} from 'primeng/card';
import {InputTextModule} from 'primeng/inputtext';
import {ToastModule} from 'primeng/toast';
import {MenuModule} from 'primeng/menu';
import {TableModule} from 'primeng/table';
import {DialogModule} from 'primeng/dialog';
import {DropdownModule} from 'primeng/dropdown';

@NgModule({
  exports: [
    ButtonModule,
    CardModule,
    InputTextModule,
    ToastModule,
    MenuModule,
    TableModule,
    DialogModule,
    DropdownModule
  ]
})
export class PrimeNgModule {
}
