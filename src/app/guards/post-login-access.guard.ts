import {Injectable} from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanLoad,
  Route,
  Router,
  RouterStateSnapshot, UrlSegment,
  UrlTree
} from '@angular/router';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PostLoginAccessGuard implements CanActivate {
  token: string

  constructor(private router: Router) {
    this.token = document.cookie.replace(/(?:(?:^|.*;\s*)t\s*\=\s*([^;]*).*$)|^.*$/, "$1")
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    console.log('post')
    if (this.token) {
      this.router.navigate(['dashboard'])
      return false
    }
    return true;
  }


}
