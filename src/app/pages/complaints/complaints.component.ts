import { Component, OnInit } from '@angular/core';

import { environment } from '../../../environments/environment';
import { Complaints } from './complaints.model';
import { ComplaintsService } from '../../core/services/complaints.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

import { customersData } from './data';

@Component({
  selector: 'app-complaints',
  templateUrl: './complaints.component.html',
  styleUrls: ['./complaints.component.scss']
})

/**
 * Ecomerce Complaints component
 */
export class ComplaintsComponent implements OnInit {

  backend = environment.backend;
  // bread crumb items
  breadCrumbItems: Array<{}>;

  customersData: any[];

  term: any;
  editForm: FormGroup;
  submitted = false;
  error = "";
  modalTitle: string;
  file: number;

  // page
  currentpage: number;

  constructor(private customerService: ComplaintsService,
    private modalService: NgbModal,
    private formBuilder: FormBuilder,
  ) { }


  ngOnInit() {
    this.breadCrumbItems = [{ label: 'Complaints' }, { label: 'Complaints', active: true }];

    this.currentpage = 1;
    this.customerService.getComplaints().subscribe(val => {
      this.customersData = val; console.log(val);
    });
    this.editForm = this.formBuilder.group({
      id: [''],
      name: [''],
      email: [''],
      title: [''],
      complaints: [''],
      answer: [''],
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
    this.editForm.controls['email'].setValue(newTable[0].email);
    this.editForm.controls['title'].setValue(newTable[0].title);
    this.editForm.controls['complaints'].setValue(newTable[0].complaints);

    this.file = newTable[0].images.id;
    this.modalTitle = newTable[0].title;

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
    this.customerService.delComplaints(id).subscribe(data => {
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
      console.log('send answer', post_data)
      this.customerService.sendAnswer(post_data).subscribe(data => {
        console.log(data)
        console.log(post_data); 

        let findIndex = this.customersData.findIndex(data => data.id == post_data.id);
        this.customersData[findIndex] = post_data;
        // this.sharedDataService.changeTable(this.customersData);
        this.submitted = false;
        modal.close();
      });
    }
  }
}
