import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BasicAuthInterceptorService  implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = localStorage.token; // you probably want to store it in localStorage or something

    // if (!token) {
    //   return next.handle(req);
    // }
    console.log("token" + token)

    const req1 = req.clone({
      headers: req.headers.set('Authorization', `Bearer ` +token),
    });

    return next.handle(req1);
  }

}