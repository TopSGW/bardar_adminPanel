import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { User } from '../../../core/models/auth.models';


@Injectable()
export class SharedDataUsersService {
  constructor() { }
  public editDataDetails: User[] = [];
  public subject = new Subject<any>();
  private messageSource = new BehaviorSubject(this.editDataDetails);
  currentTable = this.messageSource.asObservable();
  changeTable(table: User[]) {
    this.messageSource.next(table);
  }
}
