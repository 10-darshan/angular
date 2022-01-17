import { Component, OnInit } from '@angular/core';
import { Transaction } from 'src/app/transaction';

@Component({
  selector: 'app-cell-render',
  templateUrl: './cell-render.component.html',
  styleUrls: ['./cell-render.component.css']
})
export class CellRenderComponent implements OnInit {
  data:any;
  params:any;
  constructor() { }

  ngOnInit(): void {
  }
  
  agInit(params) {
    this.params=params;
  }

  onEdit() {
    this.params.context.componentParent.populateTransaction(this.params.data);
  }
  onDelete() {
    this.params.context.componentParent.deleteTransaction(this.params.data.transactionNumber);
  }
}
