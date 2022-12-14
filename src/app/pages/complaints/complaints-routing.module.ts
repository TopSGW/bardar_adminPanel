import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComplaintsComponent } from './complaints.component';
import { OrdersComponent } from './orders/orders.component';


const routes: Routes = [
  { path: '', redirectTo: 'list' },


  {
    path: 'list',
    component: ComplaintsComponent,
  },
  {
    path: 'orders',
    component: OrdersComponent,
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComplaintsRoutingModule { }
