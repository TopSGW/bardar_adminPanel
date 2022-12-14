import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { take, map } from 'rxjs/operators';
import { Shop } from '../models/shop.models';

import { MarketingService } from '../services/marketing.service';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'any'
})
export class ShopResolver implements Resolve <Observable<Shop>>{

  constructor(private ds: MarketingService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    let id = route.paramMap.get('id');
    return this.ds.getShop(id);
  }

}
