import {Injectable} from '@angular/core'
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpErrorResponse
} from '@angular/common/http'
import {Observable, throwError} from 'rxjs'
import {map, catchError, finalize} from 'rxjs/operators'
import {Router} from '@angular/router'


@Injectable()
export class HttpConfigInterceptor implements HttpInterceptor {

  constructor(
    private router: Router,
  ) {
  }

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    let token = sessionStorage.getItem('token');
    if (token) {
      request = request.clone({
        setHeaders: {
          "x-token": token,
          "Authorization": 'Bearer '+token,
        }
      });
    }

    request = request.clone({
      url: request.url
    });

    return next.handle(request).pipe(
      map((event: HttpEvent<any>) => {
        return event
      }),
      catchError((error: HttpErrorResponse) => {
        if (error.status == 403 || error.status == 401) {
          sessionStorage.clear();
          this.router.navigate(['']);
        }
        return throwError(error);
      })
    )
  }
}
