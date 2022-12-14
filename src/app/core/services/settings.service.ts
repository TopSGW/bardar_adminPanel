import { Injectable } from '@angular/core';
import { of as observableOf, Observable, BehaviorSubject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from '../../../environments/environment';

import { SysInfo } from '../models/sys_info.models';
import { ItemsGroup } from '../models/items_group.models';
import { ItemsCategory } from '../models/items_category.models';
import { Shipping } from '../models/shipping.models';
import { Sizes } from '../models/sizes.models';
import { Karats } from '../models/karats.models';
import { PaymentMethods } from '../models/payment_methods.models';
import { OrderStatus } from '../models/order_status.models';
import { Units } from '../models/units.models';
import { AuthfakeauthenticationService } from './authfake.service';

@Injectable({ providedIn: 'root' })
export class SettingsService {
  private httpOptions = {};
  constructor(private http: HttpClient, private authService: AuthfakeauthenticationService) {
    this.authService.currentUser.subscribe(user => {
      this.httpOptions = { headers: new HttpHeaders({ "x-auth-token": user.token }) };

      console.log(user)
    });
  }

  getSystemInfo() {
    return this.http.get<SysInfo>(environment.backend + `/settings/sys_info`, this.httpOptions);
  }

  updateSystemInfo(sysInfo) {
    return this.http.post(environment.backend + `/settings/sys_info`, sysInfo, this.httpOptions);
  }

  getItemsGroup() {
    return this.http.get<ItemsGroup[]>(environment.backend + `/settings/items_group`, this.httpOptions);
  }
  delItemsGroup(sysInfo) {
    return this.http.delete(environment.backend + `/settings/items_group?id=` + sysInfo, this.httpOptions);
  }
  updateCreateItemsGroup(sysInfo): Observable<any> {
    return this.http.post(environment.backend + `/settings/items_group`, sysInfo, this.httpOptions);
  }

  getItemsCategory() {
    return this.http.get<ItemsCategory[]>(environment.backend + `/settings/items_category`, this.httpOptions);
  }
  delItemsCategory(sysInfo) {
    return this.http.delete(environment.backend + `/settings/items_category?id=` + sysInfo, this.httpOptions);
  }
  updateCreateItemsCategory(sysInfo): Observable<any> {
    return this.http.post(environment.backend + `/settings/items_category`, sysInfo, this.httpOptions);
  }

  getShipping() {
    return this.http.get<Shipping[]>(environment.backend + `/settings/shipping`, this.httpOptions);
  }
  delShipping(sysInfo) {
    return this.http.delete(environment.backend + `/settings/shipping?id=` + sysInfo, this.httpOptions);
  }
  updateCreateShipping(sysInfo): Observable<any> {
    return this.http.post(environment.backend + `/settings/shipping`, sysInfo, this.httpOptions);
  }

  getUnits() {
    return this.http.get<Units[]>(environment.backend + `/settings/units`, this.httpOptions);
  }
  delUnits(sysInfo) {
    return this.http.delete(environment.backend + `/settings/units?id=` + sysInfo, this.httpOptions);
  }
  updateCreateUnits(sysInfo): Observable<any> {
    return this.http.post(environment.backend + `/settings/units`, sysInfo, this.httpOptions);
  }


  getKarats() {
    return this.http.get<Karats[]>(environment.backend + `/settings/purity`, this.httpOptions);
  }
  delKarats(sysInfo) {
    return this.http.delete(environment.backend + `/settings/purity?id=` + sysInfo, this.httpOptions);
  }
  updateCreateKarats(sysInfo): Observable<any> {
    return this.http.post(environment.backend + `/settings/purity`, sysInfo, this.httpOptions);
  }

  getSizes() {
    return this.http.get<Sizes[]>(environment.backend + `/settings/items_size`, this.httpOptions);
  }
  delSizes(sysInfo) {
    return this.http.delete(environment.backend + `/settings/items_size?id=` + sysInfo, this.httpOptions);
  }
  updateCreateSizes(sysInfo): Observable<any> {
    return this.http.post(environment.backend + `/settings/items_size`, sysInfo, this.httpOptions);
  }


  getPaymentMethods() {
    return this.http.get<PaymentMethods[]>(environment.backend + `/settings/pm`, this.httpOptions);
  }
  delPaymentMethods(sysInfo) {
    return this.http.delete(environment.backend + `/settings/pm?id=` + sysInfo, this.httpOptions);
  }
  updateCreatePaymentMethods(sysInfo): Observable<any> {
    return this.http.post(environment.backend + `/settings/pm`, sysInfo, this.httpOptions);
  }

  getOrdersStatus() {
    return this.http.get<OrderStatus[]>(environment.backend + `/settings/order_status`, this.httpOptions);
  }
  delOrdersStatus(sysInfo) {
    return this.http.delete(environment.backend + `/settings/order_status?id=` + sysInfo, this.httpOptions);
  }
  updateCreateOrdersStatus(sysInfo): Observable<any> {
    return this.http.post(environment.backend + `/settings/order_status`, sysInfo, this.httpOptions);
  }

}
