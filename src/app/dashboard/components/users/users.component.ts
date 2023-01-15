import {Component} from '@angular/core';
import {DashboardService} from "../../services/dashboard.service";
import {IUsers, Usuario} from "../../../interfaces/users.interface";
import {BsModalRef, BsModalService, ModalOptions} from "ngx-bootstrap/modal";
import {ModalUsersComponent} from "./components/modal-users/modal-users.component";
import {Categoria} from "../../../interfaces/categories.interface";
import {Message} from "primeng/api";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  private readonly collection: string = 'usuarios';
  originData: Usuario[] = []
  list: Usuario[];
  selection: string = ''
  bsModalRef?: BsModalRef;

  constructor(private readonly service: DashboardService, private modalService: BsModalService) {
    this.list = []
    this.getUsers()
  }

  getUsers() {
    return this.service.getApi(this.collection).subscribe((res: IUsers) => {
      this.originData = res.usuarios
      this.list = res.usuarios.map((item: Usuario) => (
        {...item}
      ))
    })
  }

  searchQuery(query: string) {
    if (query) {
      this.service.searchApi(this.collection, query).subscribe({
        next: (resp) => {
          console.log(resp)
          this.list = resp.results
        },
        error: (err) => {
          console.log(err)
        }
      })
      return
    }
    this.list = this.originData
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

  sugerencias(query: string) {
    this.searchQuery(query)
  }
}
