import { Component, OnInit } from '@angular/core';

import { Seller } from '../../../core/models/seller.models';
import { MarketingService } from '../../../core/services/marketing.service';
import { Router } from '@angular/router';

import { customersData } from './data';

@Component({
  selector: 'app-sellerslist',
  templateUrl: './sellerslist.component.html',
  styleUrls: ['./sellerslist.component.scss']
})
export class SellerslistComponent implements OnInit {

 // bread crumb items
 breadCrumbItems: Array<{}>;

 customersData: Seller[];

 term: any;

 // page
 currentpage: number;

 constructor(private router: Router, private marketingService: MarketingService) { }

 ngOnInit() {
   this.breadCrumbItems = [{ label: 'Sellers' }, { label: 'Sellers', active: true }];
   this.marketingService.getSellers().subscribe(val =>   { this.customersData = val, console.log(val);
    });
   this.currentpage = 0;

   /**
    * Fetches the data
    */
   // this._fetchData();
 }
 deleteGroupItem(id) {
   this.marketingService.delSeller(id).subscribe(data => {
     this.customersData = this.customersData.filter(data => data.id != id);

     // this.sharedDataService.changeTable(newTable);
     // modal.close();
     // this.newForm.reset();
   });
 }
 editItem(id){
   this.router.navigate(['/sellers/edit/'+id]);
 }
 /**
  * Customers data fetches
  */
 // private _fetchData() {
 //   this.customersData = customersData;
 // }
}
