import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly serviceUrl: string = 'https://prueba-tecnica-idecide.azurewebsites.net/api'

  constructor(
    private readonly http: HttpClient
  ) {}

  login(mail: string, password: string): Observable<any> {
    return this.http.post(this.serviceUrl + '/auth/login', {
      correo: mail,
      password: password
    })
  }


}
