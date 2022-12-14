import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UIModule } from '../../shared/ui/ui.module';
import { NgbAlertModule, NgbPaginationModule, NgbTypeaheadModule, NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TablesRoutingModule } from './tables-routing.module';
import { AdvancedSortableDirective } from './advancedtable/advanced-sortable.directive';
import { BasicComponent } from './basic/basic.component';
import { AdvancedtableComponent } from './advancedtable/advancedtable.component';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { ItemsgroupsComponent } from './itemsgroups/itemsgroups.component';
import { SharedDataService } from './itemsgroups/data';
import { SharedDataShippingService } from './shipping/data';
import { SharedDataUnitsService } from './units/data';
import { SharedDataItemsCatService } from './itemcategories/data';
import { SharedDataItemsKenfService } from './kenfcategories/data';
import { SharedDataKaratService } from './karats/data';
import { SharedDataSizeService } from './sizeofring/data';
import { SharedDataPMService } from './paymentmethod/data';
import { SharedDataOrderStatusrvice } from './orderstatus/data';
import { SharedDataMarketCategoryService } from './marketcategories/data';
import { SharedDataOfferService } from './offers/data';
import { SharedDataCouponService } from './coupons/data';
import { SharedDataUserGroupsService } from './usergroups/data';
import { NgSelectModule } from '@ng-select/ng-select';

import { UnitsComponent } from './units/units.component';
import { KaratsComponent } from './karats/karats.component';
import { SizesComponent } from './sizeofring/size.component';
import { PaymentmethodComponent } from './paymentmethod/paymentmethod.component';
import { MarketCategoriesComponent } from './marketcategories/marketcategories.component';
import { ItemcategoriesComponent } from './itemcategories/itemcategories.component';
import { KenfcategoriesComponent } from './kenfcategories/kenfcategories.component';
import { ShippingComponent } from './shipping/shipping.component';
import { OffersComponent } from './offers/offers.component';
import { CouponsComponent } from './coupons/coupons.component';
import { UsergroupsComponent } from './usergroups/usergroups.component';
import { OrderstatusComponent } from './orderstatus/orderstatus.component';
import { DropzoneModule } from 'ngx-dropzone-wrapper';
import { DROPZONE_CONFIG } from 'ngx-dropzone-wrapper';
import { DropzoneConfigInterface } from 'ngx-dropzone-wrapper';

const config: DropzoneConfigInterface = {
  // Change this to your upload POST address:

};

@NgModule({
  declarations: [BasicComponent, AdvancedtableComponent, AdvancedSortableDirective, ItemsgroupsComponent, KenfcategoriesComponent, ShippingComponent, UnitsComponent, KaratsComponent, SizesComponent, PaymentmethodComponent, MarketCategoriesComponent, ItemcategoriesComponent, OffersComponent, CouponsComponent, UsergroupsComponent, OrderstatusComponent],
  imports: [
    CommonModule,
    TablesRoutingModule,
    UIModule,
    NgbPaginationModule,
    NgbTypeaheadModule,
    DropzoneModule,
    NgSelectModule,
    NgbCollapseModule,
    NgbDropdownModule,
    FormsModule,
    ReactiveFormsModule,
    NgbAlertModule,
  ],
  exports: [
  ],
  providers: [
    SharedDataService,
    SharedDataShippingService,
    SharedDataItemsCatService,
    SharedDataItemsKenfService,
    SharedDataUnitsService,
    SharedDataKaratService,
    SharedDataSizeService,
    SharedDataPMService,
    SharedDataOrderStatusrvice,
    SharedDataMarketCategoryService,
    SharedDataOfferService,
    SharedDataCouponService,
    SharedDataUserGroupsService,
    {
      provide: DROPZONE_CONFIG,
      useValue: config
    }
  ]
})
export class TablesModule { }
