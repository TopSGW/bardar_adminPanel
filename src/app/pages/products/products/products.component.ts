import { Component, OnInit } from '@angular/core';
import { Product } from '../../../core/models/product.models';
import { Options } from 'ng5-slider';
import { HttpClient } from '@angular/common/http';
import { MarketingService } from '../../../core/services/marketing.service';
import { environment } from '../../../../environments/environment';
import { ActivatedRoute, Router } from '@angular/router';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

export class ProductQuerry {
  groups: number[] = [];
  shops: number[] = [];
  categories: number[] = [];
}
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})

/**
 * Ecommerce products component
 */

export class ProductsComponent implements OnInit {
  shops: any[] = [];
  querry: ProductQuerry;
  filterChanged: boolean = false;
  breadCrumbItems: Array<{}>;
  pricevalue = 100;
  minVal = 100;
  maxVal = 500;
  form: FormGroup;
  barcodeImage = "";
  generateQrcode = "";
  selectedId: number;
  backend = environment.backend;
  priceoption: Options = {
    floor: 0,
    ceil: 800,
    translate: (value: number): string => {
      return 'SAR ' + value;
    },
  };
  log = '';
  error = '';

  discountRates: number[] = [];
  public products: any[] = [];
  items_category: any[] = [];// public productTemp: productModel[] = [];
  items_group: any[] = [];
  constructor(private modalService: NgbModal,
    private _fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient,
    private marketingService: MarketingService) {
    this.items_category = this.route.snapshot.data.items_category;
    this.items_group = this.route.snapshot.data.items_group;
    let shops = this.route.snapshot.data.shops;
    shops.forEach(element => this.shops.push({ id: element.id, name: element.app_name_en }));
    this.querry = new ProductQuerry();
    this.form = this._fb.group({
      categories: this.querry.categories,
      groups: this.querry.groups,
      shops: this.querry.shops,
    });
  }

  ngOnInit() {
    this.breadCrumbItems = [{ label: 'Products' }, { label: 'All Products', active: true }];

    this.marketingService.getProducts().subscribe(val => {
      this.products = val;
    });
  }

  openModal(content, id) {
    console.log(id)
    this.selectedId = id;
    let product = this.products.filter(data => data.id == id)[0];
    let index = this.products.indexOf(product);

    let shopAbbreviation = product.shop_id.app_abbreviation;
    let groupAbbreviation = product.group_id.abbreviation;
    let categoryAbbreviation = product.category_id.abbreviation;
    let purity = product.purity_id[0].name_en;
    let zero = '000000';

    console.log(product)

    this.generateQrcode = shopAbbreviation + '-' + groupAbbreviation + categoryAbbreviation + purity + zero.substring(product.id.toString().length) + product.id;

    this.marketingService.generateBarcode({id: id, barcode: this.generateQrcode}).subscribe(val => {
      this.products[index].barcode = val.barcode;
      this.marketingService.getBarcode(val.barcode).subscribe(image => {

        this.barcodeImage = image;
        this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
          console.log(`Closed with: ${result}`);
        }, (reason) => {
          console.log(`Dismissed ${this.getDismissReason(reason)}`);
        });
      });
    });
  }

  onChange(event) {
    event.forEach(element => {
      this.querry.shops.push(element.id)
    });
    this.form.controls.shops.setValue(this.querry.shops);
  }

  toggleGroup({ target }, id) {
    let index = this.querry.groups.indexOf(id);
    if (index > -1) {
      target.style.fontWeight = 400;
      this.querry.groups.splice(index, 1);
    } else {
      target.style.fontWeight = 900;
      this.querry.groups.push(id);
    }
    this.form.controls.groups.setValue(this.querry.groups);
  }

  toggleCategory({ target }, id) {
    let index = this.querry.categories.indexOf(id);
    if (index > -1) {
      target.style.fontWeight = 400;
      this.querry.categories.splice(index, 1);
    } else {
      target.style.fontWeight = 900;
      this.querry.categories.push(id);
    }

    this.form.controls.categories.setValue(this.querry.categories);
  }

  apply() {
    if (this.querry.categories.length == 0 && this.querry.categories.length == 0 && this.querry.categories.length == 0 && this.filterChanged) {
      this.marketingService.getProducts().subscribe(val => {
        this.products = val;
        this.filterChanged = false;
      });
    } else {
      if (this.querry.categories.length == 0) {
        let all_categories = [];
        this.items_category.forEach(element => {
          all_categories.push(element.id);
        });
        this.form.controls.categories.setValue(all_categories);
      }
      if (this.querry.groups.length == 0) {
        let all_groups = [];
        this.items_group.forEach(element => {
          all_groups.push(element.id);
        });
        this.form.controls.groups.setValue(all_groups);
      }
      if (this.querry.shops.length == 0) {
        let all_shops = [];
        this.shops.forEach(element => {
          all_shops.push(element.id);
        });
        this.form.controls.shops.setValue(all_shops);

      }
      this.marketingService.getFiltredProducts(this.form.value).subscribe(val => {
        this.products = val;
        this.filterChanged = true;
      });
    }
  }

  searchFilter(e) {
    const searchStr = e.target.value;
    this.products = this.products.filter((product) => {
      return product.name_en.toLowerCase().search(searchStr.toLowerCase()) !== -1;
    });
  }

  editItem(id) {
    this.router.navigate(['/products/edit/' + id]);
  }

  hideItem(id, hidden) {
    this.marketingService.hideProduct({id: id, hide: hidden}).subscribe(data => {
      console.log('the product is hidden' + id);
      this.products.filter(item => item.id === id)[0].hidden = !hidden;
    });
  }

  deleteGroupItem(id) {
    this.marketingService.delProduct(id).subscribe(data => {
      this.products = this.products.filter(data => data.id != id);

      // this.sharedDataService.changeTable(newTable);
      // modal.close();
      // this.newForm.reset();
    });
  }
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
}
