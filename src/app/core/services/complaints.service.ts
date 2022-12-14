import { Injectable } from '@angular/core';
import { of as observableOf, Observable, BehaviorSubject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from '../../../environments/environment';

import { AuthfakeauthenticationService } from './authfake.service';

@Injectable({ providedIn: 'root' })
export class ComplaintsService {
  private httpOptions = {};

  constructor(private http: HttpClient, private authService: AuthfakeauthenticationService) {
    this.authService.currentUser.subscribe(user => {
      this.httpOptions = { headers: new HttpHeaders({ "x-auth-token": user.token }) };
    });

  }


  getComplaints() {
    return this.http.get<any[]>(environment.backend + `/settings/complaints`, this.httpOptions);
  }
  delComplaints(sysInfo) {
    return this.http.delete(environment.backend + `/settings/complaints?id=` + sysInfo, this.httpOptions);
  }

  sendAnswer(sysInfo): Observable<any> {
    return this.http.post(environment.backend + `/settings/sendanswer`, sysInfo, this.httpOptions);
  }
}
