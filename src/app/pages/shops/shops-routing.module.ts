import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddshopComponent } from './addshop/addshop.component';
import { ShopslistComponent } from './shopslist/shopslist.component';
import { EditShopComponent } from './editshop/editshop.component';

import { ShopResolver } from '../../core/resolvers/shop.resolver';
import { UsersResolver } from '../../core/resolvers/users.resolver';


const routes: Routes = [
    { path: '', redirectTo: 'list' },

    {
        path: 'add',
        component: AddshopComponent,
        // resolve: {owners: UsersResolver}

    },
    {
        path: 'list',
        component: ShopslistComponent,
    },
    {
        path: 'edit/:id',
        component: EditShopComponent,
        resolve: {owners: UsersResolver, shop: ShopResolver}

    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ShopsRoutingModule {}
