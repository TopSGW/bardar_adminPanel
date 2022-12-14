import { Component, OnInit } from '@angular/core';
import { SharedDataUsersService } from './data';
import { UserProfileService } from '../../../core/services/user.service';
import { User } from '../../../core/models/auth.models';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.scss']
})

/**
 * Contacts user-list component
 */
export class UserlistComponent implements OnInit {
  // bread crumb items
  breadCrumbItems: Array<{}>;
  tableData: User[];

  constructor(private dataService: SharedDataUsersService, private userService: UserProfileService) { }

  ngOnInit() {
    this.breadCrumbItems = [{ label: 'System Users' }, { label: 'Users List', active: true }];
    this.dataService.currentTable.subscribe(tableData => (this.tableData = tableData));
    this.userService.getAll().subscribe(val =>   this.dataService.changeTable(val));

  }
}
