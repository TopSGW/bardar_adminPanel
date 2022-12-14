import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShopsComponent } from './shops/shops.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { CartComponent } from './cart/cart.component';
// import { CustomersComponent } from './customers/customers.component';
import { PrivacypolicyComponent } from './privacypolicy/privacypolicy.component';
import { TermsComponent } from './terms/terms.component';
import { PermissionGuard } from '../../core/guards/permisson.guard';


const routes: Routes = [

    {
        path: 'shops',
        component: ShopsComponent,
    },
    {
        path: 'checkout',
        component: CheckoutComponent,
    },
    {
        path: 'cart',
        component: CartComponent,
    },
    // {
    //     path: 'customers',
    //     component: CustomersComponent,
    //     // canActivate: [PermissionGuard]
    // },

    {
        path: 'privacypolicy',
        component: PrivacypolicyComponent,
    },
    {
        path: 'terms',
        component: TermsComponent,
    },

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EcommerceRoutingModule {}
