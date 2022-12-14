// const tableData = [
//   {
//     code: 'AcvX3yo',
//     discount: '70',
//     startDate: '22-7-2021',
//     endDate: '22-8-2021',
//     Status: 'true'
//   }, {
//     code: 'AcvX3yo',
//     discount: '5',
//     startDate: '22-7-2021',
//     endDate: '22-8-2021',
//     Status: 'true'
//   }, {
//     code: 'AcvX3yo',
//     discount: '12',
//     startDate: '22-7-2021',
//     endDate: '22-8-2021',
//     Status: 'true'
//   }, {
//     code: 'AcvX3yo',
//     discount: '4',
//     startDate: '22-7-2021',
//     endDate: '22-8-2021',
//     Status: 'true'
//   }, {
//     code: 'AcvX3yo',
//     discount: '20',
//     startDate: '22-7-2021',
//     endDate: '22-8-2021',
//     Status: 'true'
//   }, {
//     code: 'AcvX3yo',
//     discount: '30',
//     startDate: '22-7-2021',
//     endDate: '22-8-2021',
//     Status: 'true'
//   }, {
//     code: 'AcvX3yo',
//     discount: '20',
//     startDate: '22-7-2021',
//     endDate: '22-8-2021',
//     Status: 'true'
//   }, {
//     code: 'AcvX3yo',
//     discount: '15',
//     startDate: '22-7-2021',
//     endDate: '22-8-2021',
//     Status: 'true'
//   }, {
//     code: 'AcvX3yo',
//     discount: '7',
//     startDate: '22-7-2021',
//     endDate: '22-8-2021',
//     Status: 'true'
//   }
//
// ];
//
// export { tableData };
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Coupon } from '../../../core/models/coupon.models';


@Injectable()
export class SharedDataCouponService {
  constructor() { }
  public editDataDetails: Coupon[] = [];
  public subject = new Subject<any>();
  private messageSource = new BehaviorSubject(this.editDataDetails);
  currentTable = this.messageSource.asObservable();
  changeTable(table: Coupon[]) {
    this.messageSource.next(table);
  }
}
