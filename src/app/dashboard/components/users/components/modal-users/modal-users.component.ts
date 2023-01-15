import {Component} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {BsModalRef} from "ngx-bootstrap/modal";
import {DashboardService} from "../../../../services/dashboard.service";
import {ICategories} from "../../../../../interfaces/categories.interface";

@Component({
  selector: 'app-modal-users',
  templateUrl: './modal-users.component.html',
  styleUrls: ['./modal-users.component.css']
})
export class ModalUsersComponent {
  title?: string;
  data?: any;
  formComponent!: FormGroup;
  categoriesList: { name: string, code: string }[] = []
  collection: string = 'usuarios'

  constructor(public bsModalRef: BsModalRef, private fb: FormBuilder, private service: DashboardService) {
  }

  ngOnInit() {
    this.initForm();
    this.loadData()
  }

  initForm(): void {
    this.formComponent = this.fb.group({
      nombre: this.fb.control(null),
      correo: this.fb.control(null),
      password: this.fb.control(null),
      rol: this.fb.control(null),
    });
  }

  loadData() {
    if (this.title === 'editar') {
      this.formComponent.patchValue({
        nombre: this.data.nombre,
        correo: this.data.correo,
        rol: this.data.rol
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
    this.service.putApi(this.collection, this.data.uid, body).subscribe({
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
    this.service.deleteApi(this.collection, this.data.uid).subscribe({
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
      ...this.formComponent.getRawValue(),
      password: this.formComponent.getRawValue().password ? this.formComponent.getRawValue().password : this.data.password
    }
    console.log(body)
    if (!this.data) {
      this.handlePost(body)
      return;
    }
    this.handlePut(body)
  }
}
