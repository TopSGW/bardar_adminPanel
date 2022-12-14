// const tableData = [
//   {
//     nameEn: 'Friday Offer',
//     nameAr: 'عرض الجمعة',
//     descriptionEn: 'Friday afternoon offer',
//     descriptionAr: 'عرض مساء كل جمعة',
//     startDate: '22-03-2021',
//     endDate: '22-04-2021',
//     discount: '7',
//     Status: 'true'
//   }, {
//     nameEn: 'Eid Offer',
//     nameAr: 'عرض العيد',
//     descriptionEn: 'ِEid Fitr offer',
//     descriptionAr: 'عرض عيد الفطر',
//     startDate: '22-03-2021',
//     endDate: '22-04-2021',
//     discount: '13',
//     Status: 'true'
//   }, {
//     nameEn: 'Friday Offer',
//     nameAr: 'عرض الجمعة',
//     descriptionEn: 'Friday afternoon offer',
//     descriptionAr: 'عرض مساء كل جمعة',
//     startDate: '22-03-2021',
//     endDate: '22-04-2021',
//     discount: '7',
//     Status: 'true'
//   }, {
//     nameEn: 'Friday Offer',
//     nameAr: 'عرض الجمعة',
//     descriptionEn: 'Friday afternoon offer',
//     descriptionAr: 'عرض مساء كل جمعة',
//     startDate: '22-03-2021',
//     endDate: '22-04-2021',
//     discount: '7',
//     Status: 'true'
//   }, {
//     nameEn: 'Friday Offer',
//     nameAr: 'عرض الجمعة',
//     descriptionEn: 'Friday afternoon offer',
//     descriptionAr: 'عرض مساء كل جمعة',
//     startDate: '22-03-2021',
//     endDate: '22-04-2021',
//     discount: '7',
//     Status: 'true'
//   }
//
// ];
//
// export { tableData };
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Offer } from '../../../core/models/offer.models';


@Injectable()
export class SharedDataOfferService {
  constructor() { }
  public editDataDetails: Offer[] = [];
  public subject = new Subject<any>();
  private messageSource = new BehaviorSubject(this.editDataDetails);
  currentTable = this.messageSource.asObservable();
  changeTable(table: Offer[]) {
    this.messageSource.next(table);
  }
}
