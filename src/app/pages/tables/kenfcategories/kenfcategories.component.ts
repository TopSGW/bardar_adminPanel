import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SettingsService } from '../../../core/services/settings.service';
import { MarketingService } from '../../../core/services/marketing.service';
import { ItemsCategory } from '../../../core/models/items_category.models';

import { SharedDataItemsKenfService } from './data';
import { Observable } from 'rxjs';

import { AdvancedService } from './advanced.service';
import { AdvancedSortableDirective, SortEvent } from './advanced-sortable.directive';
import { DropzoneConfigInterface } from 'ngx-dropzone-wrapper';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-kenfcategories',
  templateUrl: './kenfcategories.component.html',
  styleUrls: ['./kenfcategories.component.scss'],
  providers: [AdvancedService, DecimalPipe]
})


export class KenfcategoriesComponent implements OnInit {
  // bread crum data
  breadCrumbItems: Array<{}>;
  // Table data
  tableData: ItemsCategory[];
  public selected: any;
  hideme: boolean[] = [];
  tables$: Observable<ItemsCategory[]>;
  total$: Observable<number>;
  newForm: FormGroup;
  editForm: FormGroup;
  submitted = false;
  submittedEdit = false;
  files: number[] = [];
  config: DropzoneConfigInterface;
  backend = environment.backend;
  error = '';

  @ViewChildren(AdvancedSortableDirective) headers: QueryList<AdvancedSortableDirective>;
  public isCollapsed = true;

  constructor(public service: AdvancedService,
              private modalService: NgbModal,
              private formBuilder: FormBuilder,
              private setserv: SettingsService,
              private sharedDataService: SharedDataItemsKenfService,
              private getserv: MarketingService
            ) {
    this.tables$ = service.tables$;
    this.total$ = service.total$;
    this.config = getserv.getUploadConfig();

  }

  ngOnInit() {
    this.sharedDataService.currentTable.subscribe(tableData => (this.tableData = tableData));
    this.setserv.getItemsCategory().subscribe(val =>   this.sharedDataService.changeTable(val));
    this.newForm = this.formBuilder.group({
      name_ar: ['', [Validators.required]],
      name_en: ['kenf', [Validators.required]],
      abbreviation: ['kenf', [Validators.required]],
      kenf_collection: ['', [Validators.required]],
      images: ['', [Validators.required]]
    });
    this.editForm = this.formBuilder.group({
      id: [{ value: '', disabled: true }, [Validators.required]],
      name_ar: ['', [Validators.required]],
      name_en: ['kenf', [Validators.required]],
      abbreviation: ['kenf', [Validators.required]],
      kenf_collection: ['', [Validators.required]],
      images: ['', [Validators.required]]
    });
    this.breadCrumbItems = [{ label: 'System Setting' }, { label: 'Kenf Categories', active: true }];
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
    this.files = [];
    let newTable = this.tableData.filter(data => data.id == id);
    this.files = newTable[0].images.map(item => item.id);
    this.editForm.controls['id'].setValue(newTable[0].id);
    this.editForm.controls['name_ar'].setValue(newTable[0].name_ar);
    this.editForm.controls['name_en'].setValue(newTable[0].name_en);
    this.editForm.controls['abbreviation'].setValue(newTable[0].abbreviation);
    this.editForm.controls['kenf_collection'].setValue(newTable[0].kenf_collection);
    this.editForm.controls['images'].setValue(newTable[0].images);

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
      this.setserv.updateCreateItemsCategory({...this.newForm.value, isKenf: true}).subscribe(data => {
        this.tableData.push({id: data.id, name_ar: data.name_ar, name_en: data.name_en, abbreviation: data.abbreviation, status: data.active, kenf_collection: '', images: data.images.map(item => ({id: item}))});
        this.sharedDataService.changeTable(this.tableData);
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
      this.setserv.updateCreateItemsCategory({...post_data, images: post_data.images, isKenf: true}).subscribe(data => {
        let findIndex = this.tableData.findIndex(data => data.id == post_data.id);
        this.tableData[findIndex] = {...post_data, status: this.tableData[findIndex].status, active: true, deleted: false, isKenf: true, images: post_data.images.map(item => ({id: item}))};
        this.sharedDataService.changeTable(this.tableData);
        this.submittedEdit = false;
        modal.close();
        this.editForm.reset();
      });
    }
  }
  deleteGroupItem(id){
    this.setserv.delItemsCategory(id).subscribe(data => {
      let newTable = this.tableData.filter(data => data.id != id);
      console.log(newTable);
      this.sharedDataService.changeTable(newTable);
      // modal.close();
      // this.newForm.reset();
    });
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
