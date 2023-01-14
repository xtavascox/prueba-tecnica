import {Component} from '@angular/core';
import {DashboardService} from "../../services/dashboard.service";
import {IProducts, Producto, ProductoMod} from "../../../interfaces/products.interface";
import {TableComponent} from "../../shared/table/table.component";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  private readonly collection: string = 'productos';
  list: ProductoMod[];
  selection: string = ''

  constructor(private readonly service: DashboardService) {
    this.list = []
    this.getProducts()
  }

  handleSelection(id: string) {
    this.selection = id
    console.log(this.selection)
  }

  getProducts() {
    return this.service.getApi(this.collection).subscribe((res: IProducts) => {
      this.list = res.productos.map((item: Producto) => ({
        ...item, categoria: item.categoria.nombre, usuario: item.usuario.nombre
      }))
    })
  }


}
