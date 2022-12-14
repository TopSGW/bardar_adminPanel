import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../../core/models/product.models';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-productdetail',
  templateUrl: './productdetail.component.html',
  styleUrls: ['./productdetail.component.scss']
})

/**
 * Ecommerce product-detail component
 */
export class ProductdetailComponent implements OnInit {
  backend = environment.backend;

  breadCrumbItems: Array<{}>;
  public productDetail: Product;

  constructor(private route: ActivatedRoute) {
    this.productDetail = this.route.snapshot.data.product;
    console.log(this.productDetail);

  }

  ngOnInit() {
    this.breadCrumbItems = [{ label: 'Products' }, { label: 'Product Detail', active: true }];

  }

  /**
   * onclick Image show
   * @param event image passed
   */
  imageShow(event) {
    const image = event.target.src;
    const expandImg = document.getElementById('expandedImg') as HTMLImageElement;
    expandImg.src = image;
  }
}
