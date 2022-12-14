import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SettingsService } from '../../../core/services/settings.service';
import { Observable } from 'rxjs';

import { Units } from '../../../core/models/units.models';

import { SharedDataUnitsService } from './data';

import { AdvancedService } from './advanced.service';
import { AdvancedSortableDirective, SortEvent } from './advanced-sortable.directive';

@Component({
  selector: 'app-units',
  templateUrl: './units.component.html',
  styleUrls: ['./units.component.scss'],
  providers: [AdvancedService, DecimalPipe]
})


export class UnitsComponent implements OnInit {
  // bread crum data
  breadCrumbItems: Array<{}>;
  // Table data
  tableData: Units[];
  public selected: any;
  hideme: boolean[] = [];
  tables$: Observable<Units[]>;
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
              private setserv: SettingsService,
              private sharedDataService: SharedDataUnitsService,
              ) {
    this.tables$ = service.tables$;
    this.total$ = service.total$;
  }

  ngOnInit() {
    this.sharedDataService.currentTable.subscribe(tableData => (this.tableData = tableData));
    this.setserv.getUnits().subscribe(val =>   this.sharedDataService.changeTable(val));
    this.newForm = this.formBuilder.group({
      name_ar: ['', [Validators.required]],
      name_en: ['', [Validators.required]],
    });
    this.editForm = this.formBuilder.group({
      id: [{ value: '', disabled: true }, [Validators.required]],
      name_ar: ['', [Validators.required]],
      name_en: ['', [Validators.required]],
    });
    this.breadCrumbItems = [{ label: 'System Setting' }, { label: 'ْUnits', active: true }];
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
    this.editForm.controls['name_ar'].setValue(newTable[0].name_ar);
    this.editForm.controls['name_en'].setValue(newTable[0].name_en);

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
      this.setserv.updateCreateUnits(this.newForm.value).subscribe(data => {
        this.tableData.push({id: data.id, name_ar: data.name_ar, name_en: data.name_en, status: data.active});
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
      this.setserv.updateCreateUnits(post_data).subscribe(data => {
        console.log(post_data);

        let findIndex = this.tableData.findIndex(data => data.id == post_data.id);
        this.tableData[findIndex] = {id: post_data.id, name_ar: post_data.name_ar, name_en: post_data.name_en, status:   this.tableData[findIndex].status};
        this.sharedDataService.changeTable(this.tableData);
        this.submittedEdit = false;
        modal.close();
        this.editForm.reset();
      });
    }
  }
  deleteGroupItem(id){
    this.setserv.delUnits(id).subscribe(data => {
      let newTable = this.tableData.filter(data => data.id != id);
      console.log(newTable);
      this.sharedDataService.changeTable(newTable);
      // modal.close();
      // this.newForm.reset();
    });
  }

}
