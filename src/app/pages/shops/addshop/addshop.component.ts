import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

import { DropzoneConfigInterface } from 'ngx-dropzone-wrapper';
import { MarketingService } from '../../../core/services/marketing.service';
import { ActivatedRoute, Router } from '@angular/router'
import { environment } from '../../../../environments/environment';
import { UserProfileService } from '../../../core/services/user.service';

@Component({
  selector: 'app-addshop',
  templateUrl: './addshop.component.html',
  styleUrls: ['./addshop.component.scss']
})
export class AddshopComponent implements OnInit {
  productForm: FormGroup;

  // bread crumb items
  breadCrumbItems: Array<{}>;
  // Form submition
  selectedOwner: number;
  backend = environment.backend;

  config: DropzoneConfigInterface;
  image = '';
  file = '';
  submit: boolean = false;
  submitted: boolean = false;
  files: number[] = [];
  owners: any[] = [];
  constructor(private route: ActivatedRoute,private router: Router, public formBuilder: FormBuilder, private http: HttpClient, private setserv: MarketingService, private userService: UserProfileService) {
    this.config = setserv.getUploadConfig();

    console.log( this.owners);
  }

  ngOnInit() {
    this.breadCrumbItems = [{ label: 'Shops' }, { label: 'Add Shop', active: true }];
    this.userService.getAll().subscribe( val =>   {
      // let owners = this.route.snapshot.data.owners;
      let owners = [];
      val.forEach(element => owners.push({...element}));
      this.owners = owners;
      // this.customersData = val,
      console.log('Owner - ', this.owners);
    });

    this.productForm = this.formBuilder.group({
      seller_id: [null, [Validators.required]],
      app_name_ar: ['', [Validators.required]],
      app_name_en: ['', [Validators.required]],
      app_abbreviation: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      mobile: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      address_en: ['', [Validators.required]],
      address_ar: ['', [Validators.required]],
      description_ar: ['', [Validators.required]],
      description_en: ['', [Validators.required]],
      city: ['', [Validators.required]],
      region: [null, [Validators.required]],
      zip: ['', [Validators.required]],
      commission: ['', [Validators.required]],
      images: ['', [Validators.required]],
    });
    this.submit = false;


  }
  /**
   * Returns form
   */
  get f() {
    return this.productForm.controls;
  }
  onUploadSuccess(event){
    // event[2].srcElement.then(response => response.json()).then(data => console.log(data)).catch(err => console.log(err));
    event[0].previewElement.parentNode.removeChild(event[0].previewElement);

    let response = JSON.parse(event[2].srcElement.response);
    this.files.push(response.id);
    console.log(this.productForm.controls);

    this.productForm.controls.images.setValue(this.files);
    this.submit = false;

  }
  onAccept(file: any) {
    this.image = file.name;
    this.file = file;
  }
  /**
   * Bootsrap validation form submit method
   */
   deleteImage(id) {
     const index = this.files.indexOf(id);
     if (index > -1) {
       this.files.splice(index, 1); // 2nd parameter means remove one item only
       this.productForm.controls.images.setValue(this.files);
     }
   }

  validSubmit() {
    this.submit = true;
    this.submitted = true;

    console.log(this.productForm.value, 'kenf shop')
    // stop here if form is invalid
    if (this.productForm.invalid) {
      return;
    } else {
      this.setserv.addShop(this.productForm.value).subscribe(data => this.router.navigate(['/shops/list']));


    }
  }
}
