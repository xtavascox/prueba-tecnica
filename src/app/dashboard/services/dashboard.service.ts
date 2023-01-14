import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IProducts} from "../../interfaces/products.interface";
import {ICategories} from "../../interfaces/categories.interface";
import {IUsers} from "../../interfaces/users.interface";

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  private readonly url: string = 'https://prueba-tecnica-idecide.azurewebsites.net/api'

  constructor(private readonly http: HttpClient) {
  }

  getApi(collection: string): Observable<any> {
    return this.http.get<IProducts | ICategories | IUsers>(this.url + '/' + collection)
  }

  postApi(collection: string, body: any): Observable<any> {
    return this.http.get(this.url + '/' + collection, {...body})
  }

  putApi(collection: string, id: string, body: any): Observable<any> {
    return this.http.get(this.url + '/' + collection + "/" + id, {...body})
  }

  deleteApi(collection: string, id: string): Observable<any> {
    return this.http.get(this.url + '/' + collection + "/" + id)
  }

//  TODO:Agregar busqueda

}
