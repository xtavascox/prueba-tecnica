import {Injectable, OnInit} from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanLoad,
  Route, Router,
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

  constructor(private router: Router) {
    this.token = sessionStorage.getItem('token') || ''
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
