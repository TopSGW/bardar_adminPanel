import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Shipping } from '../../../core/models/shipping.models';

@Injectable()
export class SharedDataShippingService {
  constructor() { }
  public editDataDetails: Shipping[] = [];
  public subject = new Subject<any>();
  private messageSource = new BehaviorSubject(this.editDataDetails);
  currentTable = this.messageSource.asObservable();
  changeTable(table: Shipping[]) {
    this.messageSource.next(table);
  }
}
