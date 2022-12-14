// const tableData = [
//   {
//     nameEn: 'complete',
//     nameAr: 'مكتمل',
//     Status: 'true'
//   }, {
//     nameEn: 'pending delivery',
//     nameAr: 'جاري التوصيل',
//     Status: 'true'
//   }, {
//     nameEn: 'canceled',
//     nameAr: 'ملغي',
//     Status: 'true'
//   }
//
// ];
//
// export { tableData };
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { OrderStatus } from '../../../core/models/order_status.models';

@Injectable()
export class SharedDataOrderStatusrvice {
  constructor() { }
  public editDataDetails: OrderStatus[] = [];
  public subject = new Subject<any>();
  private messageSource = new BehaviorSubject(this.editDataDetails);
  currentTable = this.messageSource.asObservable();
  changeTable(table: OrderStatus[]) {
    this.messageSource.next(table);
  }
}
