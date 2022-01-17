import { Component, OnInit } from '@angular/core';
import { Transaction } from "../transaction";

@Component({
  selector: 'app-liquidity',
  templateUrl: './liquidity.component.html',
  styleUrls: ['./liquidity.component.css']
})
export class LiquidityComponent implements OnInit {
  transaction:Transaction;

  constructor() { }

  ngOnInit(): void {
  }

}
