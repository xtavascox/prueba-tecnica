import {Component, Input, OnInit} from '@angular/core';
import {BsModalRef} from "ngx-bootstrap/modal";
import {FormBuilder, FormGroup} from "@angular/forms";
import {DashboardService} from "../../../../services/dashboard.service";
import {Categoria, ICategories} from "../../../../../interfaces/categories.interface";

@Component({
  selector: 'app-modal-products',
  templateUrl: './modal-products.component.html',
  styleUrls: ['./modal-products.component.css']
})
export class ModalProductsComponent implements OnInit {
  title?: string;
  data?: any;
  formComponent!: FormGroup;
  categoriesList: { name: string, code: string }[] = []
  collection: string = 'productos'

  constructor(public bsModalRef: BsModalRef, private fb: FormBuilder, private service: DashboardService) {
  }

  ngOnInit() {
    this.getCategories()
    this.initForm();
    this.loadData()
  }

  loadData() {
    if (this.title === 'editar') {
      const {categoria, ...rest} = this.data
      this.formComponent.patchValue({
        nombre: rest.nombre,
        categoria: {name: categoria.nombre, code: categoria._id}
      })
    }
  }

  getCategories() {
    this.service.getApi('categorias').subscribe((resp: ICategories) => {
      this.categoriesList = resp.categorias.map(item => {
        return {name: item.nombre, code: item._id}
      })
      console.log(this.categoriesList)
    })

  }

  initForm(): void {
    this.formComponent = this.fb.group({
      nombre: this.fb.control(null),
      categoria: this.fb.control(null)
    });
  }

  handlePost(body: any) {
    this.service.postApi(this.collection, body).subscribe({
      next: (resp) => {
        console.log('caso exitoso', resp)
        this.bsModalRef.hide()
      },
      error: (err) => {
        console.log('algo fallo', err)
      }
    })
  }

  handlePut(body: any) {
    this.service.putApi(this.collection, this.data._id, body).subscribe({
      next: (resp) => {
        console.log('caso exitoso', resp)
        this.bsModalRef.hide()
      },
      error: (err) => {
        console.log('caso fallido', err)
      }
    })
  }

  handleDelete() {
    this.service.deleteApi(this.collection, this.data._id).subscribe({
      next: (resp) => {
        console.log('caso exitoso', resp)
        this.bsModalRef.hide()
      },
      error: (err) => {
        console.log('caso fallido', err)

      }
    })
  }

  sendForm() {
    console.log(this.formComponent.getRawValue());
    const body = {...this.formComponent.getRawValue(), categoria: this.formComponent.getRawValue().categoria.code}
    console.log(body)
    if (!this.data) {
      this.handlePost(body)
      return;
    }
    this.handlePut(body)
  }


}
