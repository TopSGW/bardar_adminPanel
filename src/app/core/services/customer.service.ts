import { Injectable } from '@angular/core';
import { of as observableOf, Observable, BehaviorSubject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from '../../../environments/environment';

import { DropzoneConfigInterface } from 'ngx-dropzone-wrapper';
import { Product } from '../models/product.models';

import { AuthfakeauthenticationService } from './authfake.service';

@Injectable({ providedIn: 'root' })
export class CustomerService {
  private httpOptions = {};

  constructor(private http: HttpClient, private authService: AuthfakeauthenticationService) {
    this.authService.currentUser.subscribe(user => {
      this.httpOptions = { headers: new HttpHeaders({ "x-auth-token": user.token }) };
    });

  }


  getCustomers() {
    return this.http.get<any[]>(environment.backend + `/customer`, this.httpOptions);
  }
  delCustomer(sysInfo) {
    return this.http.delete(environment.backend + `/customer?id=` + sysInfo, this.httpOptions);
  }
  updateCustomer(sysInfo): Observable<any> {
    return this.http.post(environment.backend + `/customer`, sysInfo, this.httpOptions);
  }

  getOrders() {
    return this.http.get<any[]>(environment.backend + `/order`, this.httpOptions);
  }
  delOrders(sysInfo) {
    return this.http.delete(environment.backend + `/order/delOrders?id=` + sysInfo, this.httpOptions);
  }
  updateOrder(sysInfo) {
    return this.http.post(environment.backend + `/order/updateOrders`, sysInfo, this.httpOptions);
  }
}
