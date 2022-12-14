import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import { DecimalPipe } from '@angular/common';

import { Observable } from 'rxjs';

import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MarketingService } from '../../../core/services/marketing.service';
import { Offer } from '../../../core/models/offer.models';
import { SharedDataOfferService } from './data';

import { AdvancedService } from './advanced.service';
import { AdvancedSortableDirective, SortEvent } from './advanced-sortable.directive';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.scss'],
  providers: [AdvancedService, DecimalPipe]
})


export class OffersComponent implements OnInit {
  // bread crum data
  breadCrumbItems: Array<{}>;
  // Table data
  tableData: Offer[];
  public selected: any;
  hideme: boolean[] = [];
  tables$: Observable<Offer[]>;
  total$: Observable<number>;
  newForm: FormGroup;
  editForm: FormGroup;
  submitted = false;
  submittedEdit = false;
  error = '';
  @ViewChildren(AdvancedSortableDirective) headers: QueryList<AdvancedSortableDirective>;
  public isCollapsed = true;


    constructor(public service: AdvancedService,
      private modalService: NgbModal,
      private formBuilder: FormBuilder,
      private setserv: MarketingService,
      private sharedDataService: SharedDataOfferService,
    ) {
    this.tables$ = service.tables$;
    this.total$ = service.total$;
  }

  ngOnInit() {
    this.breadCrumbItems = [{ label: 'Market Setting' }, { label: 'Ofers', active: true }];
    this.sharedDataService.currentTable.subscribe(tableData => (this.tableData = tableData));
    this.setserv.getOffer().subscribe(val => this.sharedDataService.changeTable(val));
    this.newForm = this.formBuilder.group({
      name_ar: ['', [Validators.required]],
      name_en: ['', [Validators.required]],
      description_ar: ['', [Validators.required]],
      description_en: ['', [Validators.required]],
      start_date: ['', [Validators.required]],
      end_date: ['', [Validators.required]],
      discount: ['', [Validators.required]],
    });
    this.editForm = this.formBuilder.group({
      id: [{ value: '', disabled: true }, [Validators.required]],
      name_ar: ['', [Validators.required]],
      name_en: ['', [Validators.required]],
      description_ar: ['', [Validators.required]],
      description_en: ['', [Validators.required]],
      start_date: ['', [Validators.required]],
      end_date: ['', [Validators.required]],
      discount: ['', [Validators.required]],
    });
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
    this.editForm.controls['description_ar'].setValue(newTable[0].description_ar);
    this.editForm.controls['description_en'].setValue(newTable[0].description_en);
    this.editForm.controls['start_date'].setValue(newTable[0].start_date);
    this.editForm.controls['end_date'].setValue(newTable[0].end_date);
    this.editForm.controls['discount'].setValue(newTable[0].discount);

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
      this.setserv.updateOffer(this.newForm.value).subscribe(data => {
        this.tableData.push({ id: data.id,
                              name_ar: data.name_ar,
                              name_en: data.name_en,
                              description_ar: data.description_ar,
                              description_en: data.description_en,
                              start_date: data.start_date,
                              end_date: data.end_date,
                              discount: data.discount,
                              status: data.active });
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
      this.setserv.updateOffer(post_data).subscribe(data => {
        console.log(post_data);
        let findIndex = this.tableData.findIndex(data => data.id == post_data.id);
        this.tableData[findIndex] = { id: post_data.id,
                                      name_ar: post_data.name_ar,
                                      name_en: post_data.name_en,
                                      description_ar: post_data.description_ar,
                                      description_en: post_data.description_en,
                                      start_date: post_data.start_date,
                                      end_date: post_data.end_date,
                                      discount: post_data.discount,
                                      status: this.tableData[findIndex].status };
        this.sharedDataService.changeTable(this.tableData);
        this.submittedEdit = false;
        modal.close();
        this.editForm.reset();
      });
    }
  }
  deleteGroupItem(id) {
    this.setserv.delOffer(id).subscribe(data => {
      let newTable = this.tableData.filter(data => data.id != id);
      console.log(newTable);
      this.sharedDataService.changeTable(newTable);
      // modal.close();
      // this.newForm.reset();
    });
  }
}
