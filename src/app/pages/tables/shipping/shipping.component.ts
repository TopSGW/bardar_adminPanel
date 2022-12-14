import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SettingsService } from '../../../core/services/settings.service';
import { Shipping } from '../../../core/models/shipping.models';

import { Observable } from 'rxjs';


import { SharedDataShippingService } from './data';

import { AdvancedService } from './advanced.service';
import { AdvancedSortableDirective, SortEvent } from './advanced-sortable.directive';
import { DropzoneConfigInterface } from 'ngx-dropzone-wrapper';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.scss'],
  providers: [AdvancedService, DecimalPipe]
})


export class ShippingComponent implements OnInit {
  // bread crum data
  backend = environment.backend;
  breadCrumbItems: Array<{}>;
  // Table data
  tableData: Shipping[];
  public selected: any;
  hideme: boolean[] = [];
  tables$: Observable<Shipping[]>;
  total$: Observable<number>;
  newForm: FormGroup;
  editForm: FormGroup;
  submitted = false;
  submittedEdit = false;
  error = '';
  files: number[] = [];
  config: DropzoneConfigInterface;

  @ViewChildren(AdvancedSortableDirective) headers: QueryList<AdvancedSortableDirective>;
  public isCollapsed = true;

  constructor(public service: AdvancedService,
              private modalService: NgbModal,
              private formBuilder: FormBuilder,
              private setserv: SettingsService,
              private sharedDataShippingService: SharedDataShippingService,
              ) {
    this.tables$ = service.tables$;
    this.total$ = service.total$;
  }

  ngOnInit() {
    this.sharedDataShippingService.currentTable.subscribe(tableData => (this.tableData = tableData));
    this.setserv.getShipping().subscribe(val =>   this.sharedDataShippingService.changeTable(val));
    this.newForm = this.formBuilder.group({
      company: ['', [Validators.required]],
      price: ['', [Validators.required]],
      time: ['', [Validators.required]],
    });
    this.editForm = this.formBuilder.group({
      id: [{ value: '', disabled: true }, [Validators.required]],
      company: ['', [Validators.required]],
      price: ['', [Validators.required]],
      time: ['', [Validators.required]],
    });
    this.breadCrumbItems = [{ label: 'System Setting' }, { label: 'Shipping', active: true }];
    /**
     * fetch data
     */
    // this._fetchData();
  }
  get f() { return this.newForm.controls; }
  get fe() { return this.editForm.controls; }

  changeValue(i) {
    this.hideme[i] = !this.hideme[i];
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
  open(content) {
    this.files = [];
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.newForm.reset();
      console.log(    `Closed with: ${result}` );
    }, (reason) => {
      this.newForm.reset();
      console.log(      `Dismissed ${this.getDismissReason(reason)}` );
    });
  }
  openEdit(content, id) {

    let newTable = this.tableData.filter(data => data.id == id);

    this.editForm.controls['id'].setValue(newTable[0].id);
    this.editForm.controls['company'].setValue(newTable[0].company);
    this.editForm.controls['price'].setValue(newTable[0].price);
    this.editForm.controls['time'].setValue(newTable[0].time);

    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.editForm.reset();
      console.log(    `Closed with: ${result}` );
    }, (reason) => {
      this.editForm.reset();
      console.log(      `Dismissed ${this.getDismissReason(reason)}` );
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
      this.setserv.updateCreateShipping(this.newForm.value).subscribe(data => {
        console.log('onsubmit', data)
        this.tableData.push({id: data.id, company: data.company, price: data.price, time: data.time});
        this.sharedDataShippingService.changeTable(this.tableData);
        this.submitted = false;
        modal.close();
        this.newForm.reset();
      });
    }
  }
  onEdit(modal) {
    this.files = [];
    this.submittedEdit = true;

    // stop here if form is invalid
    if (this.editForm.invalid) {
      return;
    } else {
      let post_data = this.editForm.getRawValue();
      console.log(post_data)
      this.setserv.updateCreateShipping(post_data).subscribe(data => {
        let findIndex = this.tableData.findIndex(data => data.id == post_data.id);
        this.tableData[findIndex] = {id: post_data.id, company: post_data.company, price: post_data.price, time: post_data.time};
        this.sharedDataShippingService.changeTable(this.tableData);
        this.submittedEdit = false;
        modal.close();
        this.editForm.reset();
      });
    }
  }
  deleteGroupItem(id){
    this.setserv.delShipping(id).subscribe(data => {
      let newTable = this.tableData.filter(data => data.id != id);
      this.sharedDataShippingService.changeTable(newTable);
      // modal.close();
      // this.newForm.reset();
    });
  }
  toggleActive(id){
    console.log(id);

  }
  onUploadInit(event) {
    console.log(event);

    this.submitted=true;

  }
  onQueueComplete(event){
    this.submitted = false;

  }
  onUploadError(event){
    console.log(event);
  }
  onUploadSuccess(event){
    event[0].previewElement.parentNode.removeChild(event[0].previewElement);
    let response = JSON.parse(event[2].srcElement.response);
    this.files.push(response.id);

    this.newForm.controls.images.setValue(this.files);
    this.editForm.controls.images.setValue(this.files);
  }
  deleteImage(id) {
    const index = this.files.indexOf(id);
    if (index > -1) {
      this.files.splice(index, 1); // 2nd parameter means remove one item only
      this.newForm.controls.images.setValue(this.files);
      this.editForm.controls.images.setValue(this.files);
    }
  }

}
