import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserProfileService } from '../../../core/services/user.service';
import { UserGroup } from '../../../core/models/user_group.models';
import { WizardComponent } from 'angular-archwizard';
import { MarketingService } from '../../../core/services/marketing.service';
import { DropzoneConfigInterface } from 'ngx-dropzone-wrapper';
import { ActivatedRoute, Router } from '@angular/router'


@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.scss']
})
export class AdduserComponent implements OnInit {
  // bread crumb items
  files: number;

  config: DropzoneConfigInterface;
  breadCrumbItems: Array<{}>;
  adduserFormOne: FormGroup;
  adduserFormTwo: FormGroup;
  adduserFormThree: FormGroup;
  submitted = false;
  submittedTwo = false;
  error = '';
  userGroup: UserGroup[];
  @ViewChild(WizardComponent) public wizard: WizardComponent;

  constructor(private router: Router, private userService: UserProfileService, private formBuilder: FormBuilder, private setserv: MarketingService) {
    this.config = setserv.getUploadConfig();
    this.config.maxFiles = 1;
  }

  ngOnInit() {
    this.breadCrumbItems = [{ label: 'System Users' }, { label: 'Add User', active: true }];
    this.userService.getUserGroup().subscribe(data => {
      this.userGroup = data;
    });;

    this.adduserFormOne = this.formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required]],
      landline: ['',],
    });

    this.adduserFormTwo = this.formBuilder.group({
      photo: [''],
      user_role: ['', [Validators.required]],
    });

    this.adduserFormThree = this.formBuilder.group({
      send: ['', [Validators.required]],

    });


  }
  get f() {
    return this.adduserFormOne.controls;
  }
  get fTwo() {
    return this.adduserFormTwo.controls;
  }
  next(step) {
    if (step == 1) {
      console.log(this.adduserFormOne);
      this.submitted = true;
      if (!this.adduserFormOne.invalid) {
        this.wizard.goToNextStep();
      }
    } else if (step == 2) {
      console.log(this.adduserFormTwo);
      this.submittedTwo = true;
      if (!this.adduserFormTwo.invalid) {
        this.wizard.goToNextStep();
      }
    } else if (step == 3) {
      console.log(this.adduserFormThree);
      if (!this.adduserFormThree.invalid) {
        console.log({ ...this.adduserFormOne.value, ...this.adduserFormTwo.value, ...this.adduserFormThree.value });
        this.userService.adduser({ ...this.adduserFormOne.value, ...this.adduserFormTwo.value}).subscribe(data => this.router.navigate(['/contacts/list']))

      }
    }
  }
  onUploadSuccess(event) {
    // event[2].srcElement.then(response => response.json()).then(data => console.log(data)).catch(err => console.log(err));
    let response = JSON.parse(event[2].srcElement.response);
    this.files = response.id;
    this.adduserFormTwo.controls.photo.setValue(this.files);

  }
}
