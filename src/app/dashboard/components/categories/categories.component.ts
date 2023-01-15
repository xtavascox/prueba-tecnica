import {Component, ViewChild} from '@angular/core';
import {DashboardService} from "../../services/dashboard.service";
import {Categoria, CategoriaMod, ICategories} from "../../../interfaces/categories.interface";
import {BsModalRef, BsModalService, ModalDirective, ModalOptions} from "ngx-bootstrap/modal";
import {ModalCategoriesComponent} from "./components/modal-categories/modal-categories.component";

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent {
  private readonly collection: string = 'categorias';
  list: CategoriaMod[];
  selection: string = ''
  originData: Categoria[] = []
  bsModalRef?: BsModalRef;

  constructor(private readonly service: DashboardService, private modalService: BsModalService) {
    this.list = []
    this.getCategories()
  }

  getCategories() {
    return this.service.getApi(this.collection).subscribe((res: ICategories) => {
      this.originData = res.categorias
      this.list = res.categorias.map((item: Categoria) => (
        {...item, usuario: item.usuario.nombre}
      ))
    })
  }

  handleSelection(id: string) {
    this.selection = id
    console.log(this.selection)
  }

  reload() {
    this.getCategories();
  }

  openDialog(title: 'crear' | 'editar', item?: string) {
    let tempData;
    if (item !== '') {
      tempData = this.originData.find((item) => item._id === this.selection)
      console.log('en productos', tempData)
    }

    const initialState: ModalOptions<any> = {
      initialState: {
        title: title,
        data: tempData,
      }
    };


    this.bsModalRef = this.modalService.show(ModalCategoriesComponent, initialState);
    this.bsModalRef.content.closeBtnName = 'Close';
    this.bsModalRef.onHide.asObservable().subscribe({
      next: () => {
        this.reload()
        this.bsModalRef?.onHide.unsubscribe()
      }
    })
  }

}
