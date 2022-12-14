import { Injectable } from '@angular/core';
import { of as observableOf, Observable, BehaviorSubject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from '../../../environments/environment';

import { MarketCategory } from '../models/market_category.models';
import { Offer } from '../models/offer.models';
import { Coupon } from '../models/coupon.models';
import { Seller } from '../models/seller.models';
import { Shop } from '../models/shop.models';
import { DropzoneConfigInterface } from 'ngx-dropzone-wrapper';
import { Product } from '../models/product.models';

import { AuthfakeauthenticationService } from './authfake.service';

@Injectable({ providedIn: 'root' })
export class MarketingService {
  private httpOptions = {};
  private config: DropzoneConfigInterface;
  private configFile: DropzoneConfigInterface;

  constructor(private http: HttpClient, private authService: AuthfakeauthenticationService) {
    this.authService.currentUser.subscribe(user => {
      this.httpOptions = { headers: new HttpHeaders({ "x-auth-token": user.token }) };
      this.config = {
        // Change this to your upload POST address:
        url: environment.backend + `/user/upload`,
        maxFilesize: 50,
        acceptedFiles: 'image/*',
        method: 'POST',
        maxFiles: null,
        headers: { "x-auth-token": user.token },
        uploadMultiple: false,
        paramName: 'avatar',
        parallelUploads: 10,
        createImageThumbnails: false,
      };
    });


  }
  getUploadConfig(){
    return this.config;
  }
  addSeller(sysInfo): Observable<any> {
    return this.http.post(environment.backend + `/seller`, sysInfo, this.httpOptions);
  }
  getSeller(id) {
    return this.http.get<Seller>(environment.backend + `/seller?id=` + id, this.httpOptions);
  }
  getSellers() {
    return this.http.get<Seller[]>(environment.backend + `/seller`, this.httpOptions);
  }
  delSeller(sysInfo) {
    return this.http.delete(environment.backend + `/seller?id=` + sysInfo, this.httpOptions);
  }
  addProduct(sysInfo): Observable<any> {
    return this.http.post(environment.backend + `/product`, sysInfo, this.httpOptions);
  }
  getFiltredProducts(querry) {
    return this.http.post<any[]>(environment.backend + `/product/filter`, querry, this.httpOptions);
  }
  getProducts() {
    return this.http.get<Product[]>(environment.backend + `/product`, this.httpOptions);
  }
  generateBarcode(sysInfo): Observable<any> {
    return this.http.post(environment.backend + `/product/generateBarcode`, sysInfo, this.httpOptions);
  }
  getBarcode(sysInfo) {
    return this.http.get<string>(environment.backend + `/product/getBarcode?barcode=` + sysInfo, this.httpOptions);
  }
  searchBarcode(sysInfo) {
    return this.http.get<Product>(environment.backend + `/product/scanBarcode?barcode=` + sysInfo, this.httpOptions);
  }
  delProduct(sysInfo) {
    return this.http.delete(environment.backend + `/product?id=` + sysInfo, this.httpOptions);
  }
  getProduct(sysInfo) {
    return this.http.get<Product>(environment.backend + `/product?id=` + sysInfo, this.httpOptions);
  }
  hideProduct(sysInfo) {
    return this.http.post<Product>(environment.backend + `/product/hide`, sysInfo, this.httpOptions);
  }
  addShop(sysInfo): Observable<any> {
    return this.http.post(environment.backend + `/shop`, sysInfo, this.httpOptions);
  }
  getShops() {
    return this.http.get<Shop[]>(environment.backend + `/shop`, this.httpOptions);
  }
  getShop(id) {
    return this.http.get<Shop>(environment.backend + `/shop?id=`+id, this.httpOptions);
  }
  delShop(sysInfo) {
    return this.http.delete(environment.backend + `/shop?id=` + sysInfo, this.httpOptions);
  }
  getMarketCategory() {
    return this.http.get<MarketCategory[]>(environment.backend + `/market/category`, this.httpOptions);
  }
  delMarketCategory(sysInfo) {
    return this.http.delete(environment.backend + `/market/category?id=` + sysInfo, this.httpOptions);
  }
  updateMarketCategory(sysInfo): Observable<any> {
    return this.http.post(environment.backend + `/market/category`, sysInfo, this.httpOptions);
  }

  getOffer() {
    return this.http.get<Offer[]>(environment.backend + `/market/offer`, this.httpOptions);
  }
  delOffer(sysInfo) {
    return this.http.delete(environment.backend + `/market/offer?id=` + sysInfo, this.httpOptions);
  }
  updateOffer(sysInfo): Observable<any> {
    return this.http.post(environment.backend + `/market/offer`, sysInfo, this.httpOptions);
  }


  getCoupon() {
    return this.http.get<Coupon[]>(environment.backend + `/market/coupon`, this.httpOptions);
  }
  delCoupon(sysInfo) {
    return this.http.delete(environment.backend + `/market/coupon?id=` + sysInfo, this.httpOptions);
  }
  updateCoupon(sysInfo): Observable<any> {
    return this.http.post(environment.backend + `/market/coupon`, sysInfo, this.httpOptions);
  }

}
