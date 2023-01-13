import {NgModule} from '@angular/core';
import {ButtonModule} from "primeng/button";
import {CardModule} from 'primeng/card';
import {InputTextModule} from 'primeng/inputtext';
import {ToastModule} from 'primeng/toast';

@NgModule({
  exports: [
    ButtonModule,
    CardModule,
    InputTextModule,
    ToastModule
  ]
})
export class PrimeNgModule {
}
