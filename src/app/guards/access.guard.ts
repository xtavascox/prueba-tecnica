import {Injectable, OnInit} from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanLoad,
  Route,
  RouterStateSnapshot,
  UrlSegment,
  UrlTree
} from '@angular/router';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AccessGuard implements CanLoad {
  token: string

  constructor() {
    this.token = document.cookie.replace(/(?:(?:^|.*;\s*)t\s*\=\s*([^;]*).*$)|^.*$/, "$1")
  }

  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    console.log('access')
    if (this.token) {
      console.log('puede acceder');
      return true
    }

    return false
  }
}
