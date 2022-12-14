import { Injectable } from '@angular/core';
import {
  HttpResponse,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoaderService } from '../loader.service';


@Injectable()
export class LoaderInterceptorService implements HttpInterceptor {
  private requests: HttpRequest<any>[] = [];
  constructor(private loaderService: LoaderService) { }

  removeRequest(req: HttpRequest<any>) {
    const i = this.requests.indexOf(req);
    if (i >= 0) {
      this.requests.splice(i, 1);
    }
    this.loaderService.isLoading.next(this.requests.length > 0);
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.requests.push(req);
    this.loaderService.isLoading.next(true);
    // tslint:disable-next-line: deprecation
    return Observable.create(observer => {
      const subscription = next.handle(req)
        .subscribe(
          event => {
            if (event instanceof HttpResponse) {
              console.log(event);

              this.removeRequest(req);
              observer.next(event);
            }
          },
          err => {
            console.log(err);

            this.removeRequest(req);
            observer.error(err);
          },
          () => {
            console.log(req);

            this.removeRequest(req);
            observer.complete();
          });
      return () => {
        console.log(req);

        this.removeRequest(req);
        subscription.unsubscribe();
      };
    });
  }
}
