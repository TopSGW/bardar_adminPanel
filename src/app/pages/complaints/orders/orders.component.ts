import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../../core/services/customer.service';
@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})

/**
 * Ecommerce orders component
 */
export class OrdersComponent implements OnInit {

  // bread crumb items
  breadCrumbItems: Array<{}>;
  term: any;
  order_status: Array<String>;
  transactions;

  constructor(private customerService: CustomerService) {}

  ngOnInit() {
    // this.transactions = [
    //   {
    //     order_id: 392192,
    //     customer_id: {
    //       name: 'Apollyon',
    //       createdAt: '2022/9/22'
    //     },
    //     price: 1000,
    //     status: 'Success',
    //     paymentMethod: 'Cash',
    //   },
    // ];
    this.order_status = ['Pending', 'Completed', 'Cancelled', 'Pending', 'Completed', 'Cancelled'];
    this.breadCrumbItems = [{ label: 'Customers' }, { label: 'Orders', active: true }];
    // this.customerService.getOrders().subscribe(val => {
    //   this.order_status = ['Pending', 'Completed', 'Cancelled'];
    //   this.transactions = val; console.log(val);
    // });
  }
}
