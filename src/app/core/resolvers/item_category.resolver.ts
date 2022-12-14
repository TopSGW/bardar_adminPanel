import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { take, map } from 'rxjs/operators';
import { ItemsCategory } from '../models/items_category.models';

import { SettingsService } from '../services/settings.service';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'any'
})
export class ItemsCategoryResolver implements Resolve <Observable<ItemsCategory[]>>{

  constructor(private ds: SettingsService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    // let id = route.parent.paramMap.get('id');
    return this.ds.getItemsCategory();
  }

}
