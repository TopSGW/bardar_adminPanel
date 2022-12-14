import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CustomersRoutingModule } from './customers-routing.module';
import { UIModule } from '../../shared/ui/ui.module';
import { WidgetModule } from '../../shared/widget/widget.module';

import { Ng5SliderModule } from 'ng5-slider';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgbAlertModule, NgbNavModule, NgbDropdownModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { DropzoneModule } from 'ngx-dropzone-wrapper';
import { DROPZONE_CONFIG } from 'ngx-dropzone-wrapper';
import { DropzoneConfigInterface } from 'ngx-dropzone-wrapper';
import { NgSelectModule } from '@ng-select/ng-select';
import { CustomersComponent } from './customers.component';
import { OrdersComponent } from './orders/orders.component';
import { QRCodeModule } from 'angularx-qrcode';


const config: DropzoneConfigInterface = {
  // Change this to your upload POST address:

};


@NgModule({
  // tslint:disable-next-line: max-line-length
  declarations: [CustomersComponent, OrdersComponent],
  imports: [
    CommonModule,
    CustomersRoutingModule,
    NgbNavModule,
    FormsModule,
    Ng2SearchPipeModule,
    NgbAlertModule,
    NgbDropdownModule,
    DropzoneModule,
    ReactiveFormsModule,
    UIModule,
    WidgetModule,
    Ng5SliderModule,
    NgSelectModule,
    NgbPaginationModule,
    QRCodeModule
  ],
  providers: [
    {
      provide: DROPZONE_CONFIG,
      useValue: config
    }
  ]
})
export class CustomersModule { }
