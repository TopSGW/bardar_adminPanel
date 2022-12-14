import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { take, map } from 'rxjs/operators';
import { Product } from '../models/product.models';

import { MarketingService } from '../services/marketing.service';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'any'
})
export class ProductResolver implements Resolve <Observable<Product>>{

  constructor(private ds: MarketingService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    let id = route.paramMap.get('id');
    return this.ds.getProduct(id);
  }

}
