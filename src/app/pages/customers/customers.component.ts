import { Component, OnInit } from '@angular/core';

import { Customers } from './customers.model';
import { CustomerService } from '../../core/services/customer.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

import { customersData } from './data';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})

/**
 * Ecomerce Customers component
 */
export class CustomersComponent implements OnInit {

  // bread crumb items
  breadCrumbItems: Array<{}>;

  customersData: any[];

  term: any;
  editForm: FormGroup;
  submitted = false;
  error = "";

  // page
  currentpage: number;

  constructor(private customerService: CustomerService,
    private modalService: NgbModal,
    private formBuilder: FormBuilder,
  ) { }


  ngOnInit() {
    this.breadCrumbItems = [{ label: 'Customers' }, { label: 'Customers', active: true }];

    this.currentpage = 1;
    this.customerService.getCustomers().subscribe(val => {
      this.customersData = val; console.log(val);
    });
    this.editForm = this.formBuilder.group({
      id: [{ value: '', disabled: true }, [Validators.required]],
      name: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      address: ['', [Validators.required]],
    });
    /**
     * Fetches the data
     */
    // this._fetchData();
  }
  get fe() { return this.editForm.controls; }
  openEdit(content, id) {
    let newTable = this.customersData.filter(data => data.id == id);
    this.editForm.controls['id'].setValue(newTable[0].id);
    this.editForm.controls['name'].setValue(newTable[0].name);
    this.editForm.controls['phone'].setValue(newTable[0].phone);
    this.editForm.controls['address'].setValue(newTable[0].address);
    this.editForm.controls['email'].setValue(newTable[0].email);

    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.editForm.reset();
      console.log(`Closed with: ${result}`);
    }, (reason) => {
      this.editForm.reset();
      // console.log(      `Dismissed ${this.getDismissReason(reason)}` );
    });
  }
  /**
   * Customers data fetches
   */
  // private _fetchData() {
  //   this.customersData = customersData;
  // }
  deleteGroupItem(id) {
    this.customerService.delCustomer(id).subscribe(data => {
      this.customersData = this.customersData.filter(data => data.id != id);

      // this.sharedDataService.changeTable(newTable);
      // modal.close();
      // this.newForm.reset();
    });
  }
  onEdit(modal) {
    this.submitted = true;

    // stop here if form is invalid
    if (this.editForm.invalid) {
      return;
    } else {
      let post_data = this.editForm.getRawValue();
      this.customerService.updateCustomer(post_data).subscribe(data => {
        console.log(post_data);

        let findIndex = this.customersData.findIndex(data => data.id == post_data.id);
        this.customersData[findIndex] = { id: post_data.id, name: post_data.name, email: post_data.email, phone: post_data.phone, address: post_data.address, createdAt: this.customersData[findIndex].createdAt };
        // this.sharedDataService.changeTable(this.customersData);
        this.submitted = false;
        modal.close();
        this.editForm.reset();
      });
    }
  }
}
