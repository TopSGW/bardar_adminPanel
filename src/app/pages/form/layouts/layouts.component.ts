import { Component, OnInit } from '@angular/core';
import { SysInfo } from '../../../core/models/sys_info.models';
import { SettingsService } from '../../../core/services/settings.service';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-layouts',
  templateUrl: './layouts.component.html',
  styleUrls: ['./layouts.component.scss']
})
export class LayoutsComponent implements OnInit {

  // bread crumb items
  sysInfoForm: FormGroup;
  submitted = false;
  sysInfo: SysInfo;
  error = '';
  constructor(private route: ActivatedRoute, private formBuilder: FormBuilder,private setserv: SettingsService) { }
  ngOnInit() {
    console.log();
    this.sysInfo = this.route.snapshot.data.systemInfo;
    this.sysInfoForm = this.formBuilder.group({
      app_name: [this.sysInfo.app_name, [Validators.required]],
      phone: [this.sysInfo.phone,],
      city: [this.sysInfo.city,],
      region: [this.sysInfo.region,],
      zip: [this.sysInfo.zip,],
      address: [this.sysInfo.address,],
      vat: [this.sysInfo.vat,],
      vat_number: [this.sysInfo.vat_number,],
      commission: [this.sysInfo.commission,],
      currency: [this.sysInfo.currency,],
      logo: [this.sysInfo.logo,],
    });
  }
  get f() { return this.sysInfoForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.sysInfoForm.invalid) {
      return;
    } else {
      console.log(this.sysInfoForm);
      this.setserv.updateSystemInfo(this.sysInfoForm.value).subscribe(data => console.log(data));
      

    }
  }
}
