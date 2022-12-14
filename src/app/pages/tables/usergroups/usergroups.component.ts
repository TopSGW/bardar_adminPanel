import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import { DecimalPipe } from '@angular/common';

import { Observable } from 'rxjs';

import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserProfileService } from '../../../core/services/user.service';
import { UserGroup } from '../../../core/models/user_group.models';
import { SharedDataUserGroupsService } from './data';

import { AdvancedService } from './advanced.service';
import { AdvancedSortableDirective, SortEvent } from './advanced-sortable.directive';

@Component({
  selector: 'app-usergroups',
  templateUrl: './usergroups.component.html',
  styleUrls: ['./usergroups.component.scss'],
  providers: [AdvancedService, DecimalPipe]
})


export class UsergroupsComponent implements OnInit {
  // bread crum data
  breadCrumbItems: Array<{}>;
  // Table data
  tableData: UserGroup[];
  public selected: any;
  hideme: boolean[] = [];
  tables$: Observable<UserGroup[]>;
  total$: Observable<number>;
  newForm: FormGroup;
  editForm: FormGroup;
  submitted = false;
  submittedEdit = false;
  error = '';
  selectedAccount = [];
  selectedAccounts = [];
  accounts = [
    { permission: "edit_system_info", group: "System Info" },
    { permission: "add_items_group", group: "System Settings" },
    { permission: "edit_items_group", group: "System Settings" },
    { permission: "delete_items_group", group: "System Settings" },
    { permission: "add_category_group", group: "System Settings" },
    { permission: "edit_category_group", group: "System Settings" },
    { permission: "delete_category_group", group: "System Settings" },
    { permission: "add_units", group: "System Settings" },
    { permission: "edit_units", group: "System Settings" },
    { permission: "delete_units", group: "System Settings" },
    { permission: "add_purity", group: "System Settings" },
    { permission: "edit_purity", group: "System Settings" },
    { permission: "delete_purity", group: "System Settings" },
    { permission: "add_pm", group: "System Settings" },
    { permission: "edit_pm", group: "System Settings" },
    { permission: "delete_pm", group: "System Settings" },
    { permission: "add_order_status", group: "System Settings" },
    { permission: "edit_order_status", group: "System Settings" },
    { permission: "delete_order_status", group: "System Settings" },
    { permission: "edit_privacy", group: "System Settings" },
    { permission: "edit_terms", group: "System Settings" },
    { permission: "add_marketing_category", group: "Marketing Settings" },
    { permission: "edit_marketing_category", group: "Marketing Settings" },
    { permission: "delete_marketing_category", group: "Marketing Settings" },
    { permission: "add_offers", group: "Marketing Settings" },
    { permission: "edit_offers", group: "Marketing Settings" },
    { permission: "delete_offers", group: "Marketing Settings" },
    { permission: "add_coupons", group: "Marketing Settings" },
    { permission: "edit_coupons", group: "Marketing Settings" },
    { permission: "delete_coupons", group: "System Users" },
    { permission: "add_user_group", group: "System Users" },
    { permission: "edit_user_group", group: "System Users" },
    { permission: "delete_user_group", group: "System Users" },
    { permission: "list_user_group", group: "System Users" },
    { permission: "add_user", group: "System Users" },
    { permission: "edit_user", group: "System Users" },
    { permission: "delete_user", group: "System Users" },
    { permission: "list_user", group: "System Users" },
    { permission: "add_seller", group: "Sellers" },
    { permission: "edit_seller", group: "Sellers" },
    { permission: "delete_seller", group: "Sellers" },
    { permission: "list_seller", group: "Sellers" },
    { permission: "add_shop", group: "Shops" },
    { permission: "edit_shop", group: "Shops" },
    { permission: "delete_shop", group: "Shops" },
    { permission: "list_shop", group: "Shops" },
    { permission: "add_product", group: "Products" },
    { permission: "edit_product", group: "Products" },
    { permission: "delete_product", group: "Products" },
    { permission: "list_product", group: "Products" },
    { permission: "add_order", group: "Orders" },
    { permission: "edit_order", group: "Orders" },
    { permission: "delete_order", group: "Orders" },
    { permission: "list_order", group: "Orders" },
    { permission: "add_customer", group: "Customers" },
    { permission: "edit_customer", group: "Customers" },
    { permission: "delete_customer", group: "Customers" },
    { permission: "list_customer", group: "Customers" },
    { permission: "add_invoice", group: "Invoices" },
    { permission: "edit_invoice", group: "Invoices" },
    { permission: "delete_invoice", group: "Invoices" },
    { permission: "list_invoice", group: "Invoices" },
  ];

  @ViewChildren(AdvancedSortableDirective) headers: QueryList<AdvancedSortableDirective>;
  public isCollapsed = true;


  constructor(public service: AdvancedService,
    private modalService: NgbModal,
    private formBuilder: FormBuilder,
    private setserv: UserProfileService,
    private sharedDataService: SharedDataUserGroupsService,
  ) {
    this.tables$ = service.tables$;
    this.total$ = service.total$;
  }

  ngOnInit() {
    this.breadCrumbItems = [{ label: 'System Users' }, { label: 'Users Groups', active: true }];
    this.sharedDataService.currentTable.subscribe(tableData => (this.tableData = tableData));
    this.setserv.getUserGroup().subscribe(val => this.sharedDataService.changeTable(val));
    this.newForm = this.formBuilder.group({
      name_ar: ['', [Validators.required]],
      name_en: ['', [Validators.required]],
      permissions: [''],
    });
    this.editForm = this.formBuilder.group({
      id: [{ value: '', disabled: true }, [Validators.required]],
      name_ar: ['', [Validators.required]],
      name_en: ['', [Validators.required]],
      permissions: [''],

    });
  }
  get f() { return this.newForm.controls; }
  get fe() { return this.editForm.controls; }
  open(content) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.newForm.reset();
      console.log(`Closed with: ${result}`);
    }, (reason) => {
      this.newForm.reset();
      console.log(`Dismissed ${this.getDismissReason(reason)}`);
    });
  }
  openEdit(content, id) {
    let newTable = this.tableData.filter(data => data.id == id);
    this.editForm.controls['id'].setValue(newTable[0].id);
    this.editForm.controls['name_ar'].setValue(newTable[0].name_ar);
    this.editForm.controls['name_en'].setValue(newTable[0].name_en);
    this.editForm.controls['permissions'].setValue(newTable[0].permissions);

    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.editForm.reset();
      console.log(`Closed with: ${result}`);
    }, (reason) => {
      this.editForm.reset();
      console.log(`Dismissed ${this.getDismissReason(reason)}`);
    });
  }
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
  /**
   * fetches the table value
   */
  // _fetchData() {
  //   this.tableData = tableData;
  //   for (let i = 0; i <= this.tableData.length; i++) {
  //     this.hideme.push(true);
  //   }
  // }

  /**
   * Sort table data
   * @param param0 sort the column
   *
   */
  onSort({ column, direction }: SortEvent) {
    // resetting other headers
    this.headers.forEach(header => {
      if (header.sortable !== column) {
        header.direction = '';
      }
    });
    this.service.sortColumn = column;
    this.service.sortDirection = direction;
  }
  onSubmit(modal) {
    this.submitted = true;

    // stop here if form is invalid
    if (this.newForm.invalid) {
      return;
    } else {
      this.setserv.updateUserGroup(this.newForm.value).subscribe(data => {
        this.tableData.push({ id: data.id, name_ar: data.name_ar, name_en: data.name_en, status: data.active,   permissions: data.permissions,});
        this.sharedDataService.changeTable(this.tableData);
        this.submitted = false;
        modal.close();
        this.newForm.reset();
      });
    }
  }
  onEdit(modal) {
    this.submittedEdit = true;

    // stop here if form is invalid
    if (this.editForm.invalid) {
      return;
    } else {
      let post_data = this.editForm.getRawValue();
      this.setserv.updateUserGroup(post_data).subscribe(data => {
        console.log(post_data);

        let findIndex = this.tableData.findIndex(data => data.id == post_data.id);
        this.tableData[findIndex] = { id: post_data.id, name_ar: post_data.name_ar, name_en: post_data.name_en, status: post_data.active, permissions: post_data.permissions};
        this.sharedDataService.changeTable(this.tableData);
        this.submittedEdit = false;
        modal.close();
        this.editForm.reset();
      });
    }
  }
  deleteGroupItem(id) {
    this.setserv.delUserGroup(id).subscribe(data => {
      let newTable = this.tableData.filter(data => data.id != id);
      console.log(newTable);
      this.sharedDataService.changeTable(newTable);
      // modal.close();
      // this.newForm.reset();
    });
  }
  compareAccounts = (item, selected) => {
       if (selected.group && item.group) {
           return item.group === selected.group;
       }
       if (item.permission && selected.permission) {
           return item.permission === selected.permission;
       }
       return false;
   };
}
