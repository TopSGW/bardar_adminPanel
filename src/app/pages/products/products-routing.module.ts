import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersResolver } from '../../core/resolvers/users.resolver';
import { PurityResolver } from '../../core/resolvers/purity.resolver';
import { UnitsResolver } from '../../core/resolvers/units.resolver';
import { ItemsGroupResolver } from '../../core/resolvers/item_group.resolver';
import { ItemsCategoryResolver } from '../../core/resolvers/item_category.resolver';
import { ShopsResolver } from '../../core/resolvers/shops.resolver';
import { ProductResolver } from '../../core/resolvers/product.resolver';
import { AddproductComponent } from './addproduct/addproduct.component';
import { ProductsComponent } from './products/products.component';
import { EditproductComponent } from './editproduct/editproduct.component';
import { BarcodeProductComponent } from './barcodeProduct/barcodeProduct.component';

import { ProductdetailComponent } from './productdetail/productdetail.component';


const routes: Routes = [
  { path: '', redirectTo: 'list' },

  {
    path: 'add',
    component: AddproductComponent,
    resolve: {
      items_category: ItemsCategoryResolver,
      purity: PurityResolver,
      unit: UnitsResolver,
      items_group: ItemsGroupResolver,
      shops: ShopsResolver,

    }

  },
  {
    path: 'list',
    component: ProductsComponent,
    resolve: {
      items_category: ItemsCategoryResolver,
      // purity: PurityResolver,
      // unit: UnitsResolver,
      items_group: ItemsGroupResolver,
      shops: ShopsResolver,

    }
  },
  {
    path: 'detail/:id',
    component: ProductdetailComponent,
    resolve: {
      product: ProductResolver,

    }
  },
  {
    path: 'edit/:id',
    component: EditproductComponent,
    resolve: {
      items_category: ItemsCategoryResolver,
      purity: PurityResolver,
      unit: UnitsResolver,
      items_group: ItemsGroupResolver,
      shops: ShopsResolver,
      product: ProductResolver,
    }
  },
  {
    path: 'barcode',
    component: BarcodeProductComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
