import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SellersRoutingModule } from './sellers-routing.module';
import { UIModule } from '../../shared/ui/ui.module';
import { WidgetModule } from '../../shared/widget/widget.module';

import { Ng5SliderModule } from 'ng5-slider';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgbNavModule, NgbDropdownModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { DropzoneModule } from 'ngx-dropzone-wrapper';
import { DROPZONE_CONFIG } from 'ngx-dropzone-wrapper';
import { DropzoneConfigInterface } from 'ngx-dropzone-wrapper';
import { NgSelectModule } from '@ng-select/ng-select';

import { EditsellerComponent } from './editseller/editseller.component';

import { AddsellerComponent } from './addseller/addseller.component';
import { SellerslistComponent } from './sellerslist/sellerslist.component';


const config: DropzoneConfigInterface = {
  // Change this to your upload POST address:

};

@NgModule({
  // tslint:disable-next-line: max-line-length
  declarations: [AddsellerComponent, SellerslistComponent, EditsellerComponent],
  imports: [
    CommonModule,
    SellersRoutingModule,
    NgbNavModule,
    FormsModule,
    Ng2SearchPipeModule,
    NgbDropdownModule,
    DropzoneModule,
    ReactiveFormsModule,
    UIModule,
    WidgetModule,
    Ng5SliderModule,
    NgSelectModule,
    NgbPaginationModule
  ],
  providers: [
    {
      provide: DROPZONE_CONFIG,
      useValue: config
    }
  ]
})
export class SellersModule { }
