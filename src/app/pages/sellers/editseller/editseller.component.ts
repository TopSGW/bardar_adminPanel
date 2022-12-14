import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

import { DropzoneConfigInterface } from 'ngx-dropzone-wrapper';
import { MarketingService } from '../../../core/services/marketing.service';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from '../../../../environments/environment';
import { Seller } from '../../../core/models/seller.models';

@Component({
  selector: 'app-editseller',
  templateUrl: './editseller.component.html',
  styleUrls: ['./editseller.component.scss']
})
export class EditsellerComponent implements OnInit {
  backend = environment.backend;

  productForm: FormGroup;
  // bread crumb items
  breadCrumbItems: Array<{}>;
  // Form submition
  submit: boolean = false;

  config: DropzoneConfigInterface;
  image = '';
  file = '';
  files: number[] = [];
  customersData: Seller;

  constructor(private route: ActivatedRoute, private router: Router, public formBuilder: FormBuilder, private http: HttpClient, private setserv: MarketingService) {
    this.config = setserv.getUploadConfig();
    this.customersData = this.route.snapshot.data.shop;
    this.files = this.customersData.documents;

  }
  /**
   * Returns form
   */
  get form() {
    return this.productForm.controls;
  }

  ngOnInit() {
    this.breadCrumbItems = [{ label: 'Sellers' }, { label: 'Add Seller', active: true }];

    this.productForm = this.formBuilder.group({
      id: [this.customersData.id, [Validators.required]],

      name_en: [this.customersData.name_en, [Validators.required]],
      name_ar: [this.customersData.name_ar, [Validators.required]],
      email: [this.customersData.email, [Validators.required]],
      phone: [this.customersData.phone, [Validators.required]],
      address_en: [this.customersData.address_en, [Validators.required]],
      address_ar: [this.customersData.address_ar, [Validators.required]],
      description_ar: [this.customersData.description_ar, [Validators.required]],
      description_en: [this.customersData.description_en, [Validators.required]],
      city: [this.customersData.city, [Validators.required]],
      region: [this.customersData.region, [Validators.required]],
      zip: [this.customersData.zip, [Validators.required]],
      documents: [this.customersData.documents, [Validators.required]],
    });
    this.submit = false;
  }

  onAccept(file: any) {
    this.image = file.name;
    this.file = file;
  }
  /**
   * Bootsrap validation form submit method
   */
  onUploadSuccess(event) {
    // event[2].srcElement.then(response => response.json()).then(data => console.log(data)).catch(err => console.log(err));
    event[0].previewElement.parentNode.removeChild(event[0].previewElement);

    let response = JSON.parse(event[2].srcElement.response);
    this.files.push(response.id);
    console.log(this.productForm.controls);

    this.productForm.controls.documents.setValue(this.files);
    this.submit = false;

  }
  deleteImage(id) {
    const index = this.files.indexOf(id);
    if (index > -1) {
      this.files.splice(index, 1); // 2nd parameter means remove one item only
      this.productForm.controls.documents.setValue(this.files);
    }
  }

  validSubmit() {
    this.submit = true;

    // stop here if form is invalid
    if (this.productForm.invalid) {
      return;
    } else {
      console.log(this.productForm);

      this.setserv.addSeller(this.productForm.value).subscribe(data => this.router.navigate(['/sellers/list']));
      this.submit = false;


    }
    // const formData = new FormData();
    // formData.append('name', this.productForm.get('name').value);
    // formData.append('manufacture_name', this.productForm.get('manufacture_name').value);
    // formData.append('manufacture_brand', this.productForm.get('manufacture_brand').value);
    // formData.append('price', this.productForm.get('price').value);
    // formData.append('image', this.file, this.image);
    //
    // this.http.post<any>(`http://localhost:8000/api/products`, formData)
    //   .subscribe((data) => {
    //     // console.log('da', data);
    //     return data;
    //   });
  }
}
