import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {BsModalRef} from "ngx-bootstrap/modal";
import {DashboardService} from "../../../../services/dashboard.service";
import {Categoria} from "../../../../../interfaces/categories.interface";

@Component({
  selector: 'app-modal-categories',
  templateUrl: './modal-categories.component.html',
  styleUrls: ['./modal-categories.component.css']
})
export class ModalCategoriesComponent implements OnInit {
  title?: string;
  data?: Categoria;
  reload?: () => void;
  formComponent!: FormGroup;
  categoriesList: { name: string, code: string }[] = []
  collection: string = 'categorias'

  constructor(public bsModalRef: BsModalRef, private fb: FormBuilder, private service: DashboardService) {
  }

  ngOnInit() {
    this.initForm();
    this.loadData()
  }

  initForm(): void {
    this.formComponent = this.fb.group({
      nombre: this.fb.control(null),
    });
  }

  loadData() {
    if (this.title === 'editar') {
      this.formComponent.patchValue({
        nombre: this.data!.nombre,
      })
    }
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
    this.service.putApi(this.collection, this.data!._id, body).subscribe({
      next: (resp) => {
        console.log('caso exitoso', resp)
        this.bsModalRef.hide()
        this.reload;
      },
      error: (err) => {
        console.log('caso fallido', err)
      }
    })
  }

  handleDelete() {
    this.service.deleteApi(this.collection, this.data!._id).subscribe({
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
    const body = {
      ...this.formComponent.getRawValue()
    }
    console.log(body)
    if (!this.data) {
      this.handlePost(body)
      return;
    }
    this.handlePut(body)
  }
}
