// const tableData = [
//   {
//     nameEn: 'Owner',
//     nameAr: 'مالك',
//     Status: 'true'
//   }, {
//     nameEn: 'Admin',
//     nameAr: 'مشرف',
//     Status: 'true'
//   }, {
//     nameEn: 'Dispatcher',
//     nameAr: 'المرسل',
//     Status: 'true'
//   }, {
//     nameEn: 'Delivery',
//     nameAr: 'التوصيل',
//     Status: 'true'
//   }
//
// ];
//
// export { tableData };
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { UserGroup } from '../../../core/models/user_group.models';

@Injectable()
export class SharedDataUserGroupsService {
  constructor() { }
  public editDataDetails: UserGroup[] = [];
  public subject = new Subject<any>();
  private messageSource = new BehaviorSubject(this.editDataDetails);
  currentTable = this.messageSource.asObservable();
  changeTable(table: UserGroup[]) {
    this.messageSource.next(table);
  }
}
