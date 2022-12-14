import { Component, OnInit, Input } from '@angular/core';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.scss']
})
export class TransactionComponent implements OnInit {

  @Input() transactions: any[];
  selected: any;
  backend = environment.backend;

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }

  /**
   * Open modal
   * @param content modal content
   */
  openModal(content: any, id) {
    console.log(id);
    let findIndex = this.transactions.findIndex(data => data.order_id == id);
    this.selected =  this.transactions[findIndex];
    this.modalService.open(content, { centered: true });
  }

}
