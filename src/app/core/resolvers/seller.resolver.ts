import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { take, map } from 'rxjs/operators';
import { Seller } from '../models/seller.models';

import { MarketingService } from '../services/marketing.service';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'any'
})
export class SellerResolver implements Resolve <Observable<Seller>>{

  constructor(private ds: MarketingService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    let id = route.paramMap.get('id');
    return this.ds.getSeller(id);
  }

}
