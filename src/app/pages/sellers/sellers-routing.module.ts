import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddsellerComponent } from './addseller/addseller.component';
import { SellerslistComponent } from './sellerslist/sellerslist.component';
import { EditsellerComponent } from './editseller/editseller.component';

import { SellerResolver } from '../../core/resolvers/seller.resolver';


const routes: Routes = [
    { path: '', redirectTo: 'list' },

    {
        path: 'add',
        component: AddsellerComponent,
    },
    {
        path: 'list',
        component: SellerslistComponent,
    },
    {
        path: 'edit/:id',
        component: EditsellerComponent,
        resolve: {shop: SellerResolver}

    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SellersRoutingModule {}
