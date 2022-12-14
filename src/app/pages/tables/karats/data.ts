// const tableData = [
//   {
//     nameEn: '24K',
//     nameAr: '٢٤ قيراط',
//     Status: 'true'
//   }, {
//     nameEn: '21K',
//     nameAr: '٢١ قيراط',
//     Status: 'true'
//   }, {
//     nameEn: '18K',
//     nameAr: '١٨ قيراط',
//     Status: 'true'
//   }
//
// ];
//
// export { tableData };
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Karats } from '../../../core/models/karats.models';


@Injectable()
export class SharedDataKaratService {
  constructor() { }
  public editDataDetails: Karats[] = [];
  public subject = new Subject<any>();
  private messageSource = new BehaviorSubject(this.editDataDetails);
  currentTable = this.messageSource.asObservable();
  changeTable(table: Karats[]) {
    this.messageSource.next(table);
  }
}
