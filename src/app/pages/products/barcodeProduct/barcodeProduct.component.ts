import { Component, OnInit } from '@angular/core';
import { DropzoneConfigInterface } from 'ngx-dropzone-wrapper';
import { MarketingService } from '../../../core/services/marketing.service';
import { environment } from '../../../../environments/environment';
import { Html5Qrcode } from "html5-qrcode";
import { Product } from '../../../core/models/product.models';

@Component({
  selector: 'app-barcodeProduct',
  templateUrl: './barcodeProduct.component.html',
  styleUrls: ['./barcodeProduct.component.scss']
})
export class BarcodeProductComponent implements OnInit {
  config: DropzoneConfigInterface;
  barecode: string = "test";
  productDetail: Product;
  backend = environment.backend;

  constructor(private setserv: MarketingService) {
    this.config = setserv.getUploadConfig();

  }

  ngOnInit(): void {
    this.config.url = environment.backend;
    this.config.autoProcessQueue = false;
    // this.config.addedfile = function(file) {
    //   console.log(file);
    //
    //
    //   // var reader = new FileReader();
    //   // reader.onload = (event: any) => {
    //   //   let url = event.target.result;
    //   // };
    //   // reader.onerror = (event: any) => {
    //   //   console.log("File could not be read: " + event.target.error.code);
    //   // };
    //   // reader.readAsDataURL(file);
    // };
  }
  searchBarcode() {
    this.setserv.searchBarcode(this.barecode).subscribe(product => {
      console.log(product);
      this.productDetail = product;
    });
  }
  onUploadSuccess(event) {
    console.log(event[0]);
    event[0].previewElement.parentNode.removeChild(event[0].previewElement);

    const html5QrCode = new Html5Qrcode(/* element id */ "reader");
    html5QrCode.scanFile(event[0], true)
      .then(decodedText => {
        // success, use decodedText
        console.log(this.barecode);

        this.barecode = decodedText;
        console.log(decodedText);
      })
      .catch(err => {
        // failure, handle it.
        console.log(`Error scanning file. Reason: ${err}`)
      });
    // let response = JSON.parse(event[2].srcElement.response);
  }

}
