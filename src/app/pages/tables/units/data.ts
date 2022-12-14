// const tableData = [
//   {
//     nameEn: 'Kilo gram',
//     nameAr: 'كيلو غرام',
//     Status: 'true'
//   }, {
//     nameEn: 'Gram',
//     nameAr: 'جرام',
//     Status: 'true'
//   }, {
//     nameEn: 'Oz',
//     nameAr: 'أونصة',
//     Status: 'true'
//   }
//
// ];
//
// export { tableData };
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Units } from '../../../core/models/units.models';

@Injectable()
export class SharedDataUnitsService {
  constructor() { }
  public editDataDetails: Units[] = [];
  public subject = new Subject<any>();
  private messageSource = new BehaviorSubject(this.editDataDetails);
  currentTable = this.messageSource.asObservable();
  changeTable(table: Units[]) {
    this.messageSource.next(table);
  }
}
