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
import { Sizes } from '../../../core/models/sizes.models';


@Injectable()
export class SharedDataSizeService {
  constructor() { }
  public editDataDetails: Sizes[] = [];
  public subject = new Subject<any>();
  private messageSource = new BehaviorSubject(this.editDataDetails);
  currentTable = this.messageSource.asObservable();
  changeTable(table: Sizes[]) {
    this.messageSource.next(table);
  }
}
