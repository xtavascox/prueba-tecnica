import {Component} from '@angular/core';
import {DashboardService} from "../../services/dashboard.service";
import {Categoria, CategoriaMod, ICategories} from "../../../interfaces/categories.interface";

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent {
  private readonly collection: string = 'categorias';
  list: CategoriaMod[];
  selection: string = ''
  isVisible: boolean = false



  constructor(private readonly service: DashboardService) {
    this.list = []
    this.getCategories()
  }

  getCategories() {
    return this.service.getApi(this.collection).subscribe((res: ICategories) => {
      this.list = res.categorias.map((item: Categoria) => (
        {...item, usuario: item.usuario.nombre}
      ))
    })
  }

  handleSelection(id: string) {
    this.selection = id
    console.log(this.selection)
  }

  handleModal() {
    this.isVisible = true
    console.log(this.isVisible)
  }
}
