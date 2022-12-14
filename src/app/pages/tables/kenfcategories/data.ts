// const tableData = [
//   {
//     nameEn: 'Earrings',
//     nameAr: 'الأقراط',
//     Status: 'true'
//   }, {
//     nameEn: 'Necklaces',
//     nameAr: 'القلادات',
//     Status: 'true'
//   }, {
//     nameEn: 'Bracelets',
//     nameAr: 'الأساور',
//     Status: 'true'
//   }, {
//     nameEn: 'Rings',
//     nameAr: 'الخواتم',
//     Status: 'true'
//   }, {
//     nameEn: 'Watches',
//     nameAr: 'الساعات',
//     Status: 'true'
//   }
//
// ];
//
// export { tableData };
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { ItemsCategory } from '../../../core/models/items_category.models';

@Injectable()
export class SharedDataItemsKenfService {
  constructor() { }
  public editDataDetails: ItemsCategory[] = [];
  public subject = new Subject<any>();
  private messageSource = new BehaviorSubject(this.editDataDetails);
  currentTable = this.messageSource.asObservable();
  changeTable(table: ItemsCategory[]) {
    this.messageSource.next(table);
  }
}
