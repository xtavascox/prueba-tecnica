import {Component} from '@angular/core';
import {DashboardService} from "../../services/dashboard.service";
import {IUsers, Usuario} from "../../../interfaces/users.interface";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  private readonly collection: string = 'usuarios';
  list: Usuario[];
  selection: string = ''

  constructor(private readonly service: DashboardService) {
    this.list = []
    this.getCategories()
  }

  getCategories() {
    return this.service.getApi(this.collection).subscribe((res: IUsers) => {
      this.list = res.usuarios.map((item: Usuario) => (
        {...item}
      ))
    })
  }

  handleSelection(id: string) {
    this.selection = id
    console.log(this.selection)
  }
}
