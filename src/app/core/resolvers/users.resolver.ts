import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { take, map } from 'rxjs/operators';
import { User } from '../models/auth.models';

import { UserProfileService } from '../services/user.service';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'any'
})
export class UsersResolver implements Resolve <Observable<User[]>>{

  constructor(private ds: UserProfileService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    // let id = route.parent.paramMap.get('id');
    return this.ds.getAll();
  }

}
