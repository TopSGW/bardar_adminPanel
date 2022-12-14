import { Injectable } from '@angular/core';
import { of as observableOf, Observable, BehaviorSubject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from '../../../environments/environment';

import { User } from '../models/auth.models';
import { UserGroup } from '../models/user_group.models';
import { AuthfakeauthenticationService } from './authfake.service';

@Injectable({ providedIn: 'root' })
export class UserProfileService {
  private httpOptions = {};
  constructor(private http: HttpClient, private authService: AuthfakeauthenticationService) {
    this.authService.currentUser.subscribe(user => {
      this.httpOptions = { headers: new HttpHeaders({ "x-auth-token": user.token }) };

      console.log(user)
    });
  }

  getUserGroup() {
    return this.http.get<UserGroup[]>(environment.backend + `/user/group`, this.httpOptions);
  }
  delUserGroup(sysInfo) {
    return this.http.delete(environment.backend + `/user/group?id=` + sysInfo, this.httpOptions);
  }
  updateUserGroup(sysInfo): Observable<any> {
    return this.http.post(environment.backend + `/user/group`, sysInfo, this.httpOptions);
  }
  adduser(adduser): Observable<any> {
    return this.http.post(environment.backend + `/user/addUser`, adduser, this.httpOptions);
  }
  getAll() {
    return this.http.get<User[]>(environment.backend + `/user/all`, this.httpOptions);
  }
  getFile(id): Observable<any> {
    return this.http.get(environment.backend + `/getfile?id=`+id);
  }
  register(user: User) {
    return this.http.post(`/users/register`, user);
  }
}
