import {Component} from '@angular/core';
import {DashboardService} from "../../services/dashboard.service";
import {IUsers, Usuario} from "../../../interfaces/users.interface";
import {BsModalRef, BsModalService, ModalOptions} from "ngx-bootstrap/modal";
import {ModalUsersComponent} from "./components/modal-users/modal-users.component";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  private readonly collection: string = 'usuarios';
  list: Usuario[];
  selection: string = ''
  bsModalRef?: BsModalRef;

  constructor(private readonly service: DashboardService, private modalService: BsModalService) {
    this.list = []
    this.getUsers()
  }

  getUsers() {
    return this.service.getApi(this.collection).subscribe((res: IUsers) => {
      this.list = res.usuarios.map((item: Usuario) => (
        {...item}
      ))
    })
  }

  reload() {
    this.getUsers()
  }

  handleSelection(id: string) {
    this.selection = id
    console.log(this.selection)
  }

  openDialog(title: 'crear' | 'editar', item?: string) {
    let tempData;
    if (item !== '') {
      tempData = this.list.find((item) => item.uid === this.selection)
      console.log('en productos', tempData)
    }


    const initialState: ModalOptions<any> = {
      initialState: {
        title: title,
        data: tempData
      }
    };


    this.bsModalRef = this.modalService.show(ModalUsersComponent, initialState);
    this.bsModalRef.content.closeBtnName = 'Close';
    this.bsModalRef.onHide.asObservable().subscribe({
      next: () => {
        this.reload()
        this.bsModalRef?.onHide.unsubscribe()
      }
    })
  }
}
