// const tableData = [
//   {
//     nameEn: 'Fine Earrings',
//     nameAr: 'الأقراط الفاخرة',
//     Status: 'true'
//   }, {
//     nameEn: 'Fine Necklaces',
//     nameAr: 'القلادات الفاخرة',
//     Status: 'true'
//   }, {
//     nameEn: 'Fine Bracelets',
//     nameAr: 'الأساور الفاخرة',
//     Status: 'true'
//   }, {
//     nameEn: 'Fine Rings',
//     nameAr: 'الخواتم الفاخرة',
//     Status: 'true'
//   }, {
//     nameEn: 'Fine Watches',
//     nameAr: 'الساعات الفاخرة',
//     Status: 'true'
//   }, {
//     nameEn: 'Fashion Earrings',
//     nameAr: 'الأقراط العصرية',
//     Status: 'true'
//   }, {
//     nameEn: 'Fashion Necklaces',
//     nameAr: 'القلادات العصرية',
//     Status: 'true'
//   }, {
//     nameEn: 'Fashion Bracelets',
//     nameAr: 'الأساور العصرية',
//     Status: 'true'
//   }, {
//     nameEn: 'Fashion Rings',
//     nameAr: 'الخواتم العصرية',
//     Status: 'true'
//   }
//
// ];
//
// export { tableData };

import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { MarketCategory } from '../../../core/models/market_category.models';


@Injectable()
export class SharedDataMarketCategoryService {
  constructor() { }
  public editDataDetails: MarketCategory[] = [];
  public subject = new Subject<any>();
  private messageSource = new BehaviorSubject(this.editDataDetails);
  currentTable = this.messageSource.asObservable();
  changeTable(table: MarketCategory[]) {
    this.messageSource.next(table);
  }
}
