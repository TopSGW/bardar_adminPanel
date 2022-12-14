import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { EcommerceRoutingModule } from './ecommerce-routing.module';
import { UIModule } from '../../shared/ui/ui.module';
import { WidgetModule } from '../../shared/widget/widget.module';

import { Ng5SliderModule } from 'ng5-slider';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgbNavModule, NgbDropdownModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { DropzoneModule } from 'ngx-dropzone-wrapper';
import { DROPZONE_CONFIG } from 'ngx-dropzone-wrapper';
import { DropzoneConfigInterface } from 'ngx-dropzone-wrapper';
import { NgSelectModule } from '@ng-select/ng-select';

import { ShopsComponent } from './shops/shops.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { CartComponent } from './cart/cart.component';
// import { CustomersComponent } from './customers/customers.component';
// import { OrdersComponent } from './orders/orders.component';
import { PrivacypolicyComponent } from './privacypolicy/privacypolicy.component';
import { TermsComponent } from './terms/terms.component';


const config: DropzoneConfigInterface = {
  // Change this to your upload POST address:

};

@NgModule({
  // tslint:disable-next-line: max-line-length
  declarations: [ ShopsComponent, CheckoutComponent, CartComponent,  PrivacypolicyComponent, TermsComponent],
  imports: [
    CommonModule,
    EcommerceRoutingModule,
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
export class EcommerceModule { }
