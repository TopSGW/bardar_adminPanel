// const tableData = [
//   {
//     nameEn: 'Cash',
//     nameAr: 'نقدا',
//     Status: 'true'
//   }, {
//     nameEn: 'Electronic',
//     nameAr: 'إلكتروني',
//     Status: 'true'
//   }
//
// ];
//
// export { tableData };
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { PaymentMethods } from '../../../core/models/payment_methods.models';

@Injectable()
export class SharedDataPMService {
  constructor() { }
  public editDataDetails: PaymentMethods[] = [];
  public subject = new Subject<any>();
  private messageSource = new BehaviorSubject(this.editDataDetails);
  currentTable = this.messageSource.asObservable();
  changeTable(table: PaymentMethods[]) {
    this.messageSource.next(table);
  }
}
