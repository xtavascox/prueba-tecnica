import {Component} from '@angular/core';
import {DashboardService} from "../../services/dashboard.service";
import {IProducts, Producto, ProductoMod} from "../../../interfaces/products.interface";
import {TableComponent} from "../../shared/table/table.component";
import {BsModalRef, BsModalService, ModalOptions} from "ngx-bootstrap/modal";
import {ModalProductsComponent} from "./components/modal-products/modal-products.component";
import {Categoria} from "../../../interfaces/categories.interface";
import {Message} from "primeng/api";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  private readonly collection: string = 'productos';
  bsModalRef?: BsModalRef;
  originData: Producto[] = []
  list: ProductoMod[];
  selection: string = ''
  msgs: Message[]=[];
  constructor(private readonly service: DashboardService, private modalService: BsModalService) {
    this.list = []
    this.getProducts()
  }

  handleSelection(id: string) {
    this.selection = id
  }

  getProducts() {
    return this.service.getApi(this.collection).subscribe((res: IProducts) => {
      this.originData = res.productos;
      this.list = res.productos.map((item: Producto) => {
        return {
          ...item, categoria: item.categoria.nombre, usuario: item.usuario.nombre
        }
      })
    })
  }

  searchQuery(query: string) {
    if (query) {
      this.service.searchApi(this.collection, query).subscribe({
        next: (resp) => {
          console.log(resp)
          this.list = resp.results.map((item: Categoria) => (
            {...item, usuario: item.usuario}
          ))

        },
        error: (err) => {
          console.log(err)
        }
      })
      return;
    }
    this.list = this.originData.map((item: Producto) => {
      return {
        ...item, categoria: item.categoria.nombre, usuario: item.usuario.nombre
      }
    })

  }

  reload() {
    this.getProducts()
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
        data: tempData
      }
    };

    this.bsModalRef = this.modalService.show(ModalProductsComponent, initialState);
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
