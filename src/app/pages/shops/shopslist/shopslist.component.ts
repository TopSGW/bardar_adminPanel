import { Component, OnInit } from '@angular/core';
import { Shop } from '../../../core/models/shop.models';
import { MarketingService } from '../../../core/services/marketing.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shopslist',
  templateUrl: './shopslist.component.html',
  styleUrls: ['./shopslist.component.scss']
})
export class ShopslistComponent implements OnInit {

  // bread crumb items
  breadCrumbItems: Array<{}>;

  customersData: Shop[];

  term: any;

  // page
  currentpage: number;

  constructor(private router: Router, private marketingService: MarketingService) { }

  ngOnInit() {

    this.breadCrumbItems = [{ label: 'Shops' }, { label: 'Shops', active: true }];

    this.marketingService.getShops().subscribe(val =>   { this.customersData = val, console.log(val);
     });
    this.currentpage = 0;
    /**
     * Fetches the data
     */
    // this._fetchData();
  }
  deleteGroupItem(id) {
    this.marketingService.delShop(id).subscribe(data => {
      this.customersData = this.customersData.filter(data => data.id != id);

      // this.sharedDataService.changeTable(newTable);
      // modal.close();
      // this.newForm.reset();
    });
  }
  editItem(id){
    this.router.navigate(['/shops/edit/'+id]);
  }
  /**
   * Customers data fetches
   */
  // private _fetchData() {
  //   this.customersData = customersData;
  // }
}
