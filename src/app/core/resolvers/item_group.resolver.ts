import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { take, map } from 'rxjs/operators';
import { ItemsGroup } from '../models/items_group.models';

import { SettingsService } from '../services/settings.service';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'any'
})
export class ItemsGroupResolver implements Resolve <Observable<ItemsGroup[]>>{

  constructor(private ds: SettingsService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    // let id = route.parent.paramMap.get('id');
    return this.ds.getItemsGroup();
  }

}
