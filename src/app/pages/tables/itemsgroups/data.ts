import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { ItemsGroup } from '../../../core/models/items_group.models';

@Injectable()
export class SharedDataService {
  constructor() { }
  public editDataDetails: ItemsGroup[] = [];
  public subject = new Subject<any>();
  private messageSource = new BehaviorSubject(this.editDataDetails);
  currentTable = this.messageSource.asObservable();
  changeTable(table: ItemsGroup[]) {
    this.messageSource.next(table);
  }
}
