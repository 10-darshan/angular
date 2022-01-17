import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { TransactionService } from '../transaction.service';
import { Transaction } from "../transaction";
import { trimTrailingNulls } from '@angular/compiler/src/render3/view/util';
import { AgGridAngular } from 'ag-grid-angular'; 
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { TransactionComponent } from './transaction/transaction.component';
import { FormService } from '../form.service';
import { CellRenderComponent } from './cell-render/cell-render.component';
import { GridOptions } from 'ag-grid';
import { ISubscription } from 'rxjs/Subscription';
import { IsColumnFunc } from 'ag-grid-community';


@Component({
  selector: 'app-reporting',
  templateUrl: './reporting.component.html',
  styleUrls: ['./reporting.component.css']
})
export class ReportingComponent implements OnInit, OnDestroy {
  settlementCurrency:string;
  settlementAmount:number;
  settlementAmountFrom:number;
  settlementAmountTo:number;
  settlementFromDate:string;
  settlementToDate:string;
  instructedCurrency:String;
  
  private gridApi:any;
  private gridColumnApi:any;
  currency:String[];
  rowData:any;
  gridOptions:any;
  subscription: ISubscription;
  

  constructor(private service: TransactionService, private dialog: MatDialog,
     private formService:FormService) {
       this.gridOptions={
         context :{
           componentParent:this
         }
       }
     }

  ngOnInit(): void {
    this.service.getCurrency().subscribe(data=>this.currency=data);
    //this.service.getAllTransaction().subscribe(data=>this.rowData=data);
  }

  public searchTransaction():void {
    this.service.searchTransaction(this.settlementFromDate, this.settlementToDate)
    .subscribe(data=>this.rowData=data);
  }

  columnDefs = [
    {headerName:"Transaction Number", field: "transactionNumber" ,sortable:true, filter:true, editable: true, resizable:true, flex:1},
    {headerName:"Settlement Account Numer", field: "toAccountNumber",sortable:true,filter: true, editable: true, resizable:true, flex:1},
    {headerName:"Settlement Amount", field: "transactionAmount",sortable:true, filter: true, editable: true, resizable:true, flex:1},
    {headerName:"Settlement Currency", field: "transactionCurrency",sortable:true, filter: true, editable: true, resizable:true, flex:1},
    {headerName:"Settlement Date", field: "transactionDate",sortable:true, filter: true, editable: true, resizable:true, flex:1}, 
    {headerName:"Action", field: "action", "cellRendererFramework":CellRenderComponent}
  ];
 

  onGridReady(params:any) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
  }

  /*onDeleteSelected():void {
    var selectedData = this.gridApi.getSelectedRows();
    this.service.deleteTransaction(selectedData[0].transactionNumber).subscribe();
    this.searchTransaction();
  }

  onUpdateSelected():void {
    let selectedData = this.gridApi.getSelectedRows();
    let transaction:Transaction=new Transaction();
    transaction.transactionNumber=selectedData[0].transactionNumber;
    transaction.toAccountNumber=selectedData[0].toAccountNumber;
    transaction.transactionAmount=selectedData[0].transactionAmount;
    transaction.transactionCurrency=selectedData[0].transactionCurrency;
    transaction.transactionDate=selectedData[0].transactionDate;
    this.service.updateTransaction(transaction).subscribe();
  }

  onAddRow()
   {
     this.gridApi.updateRowData({
  add: [{ transactionNumber: 'Transaction Number', toAccountNumber: 'Account Number', transactionAmount: 'Amount', transactionCurrency: 'Currency', transactionDate: 'date' }]
     });
     
   }*/

   onCreate() {
     this.formService.initializeFormGroup();
     const dialogConfig =new MatDialogConfig();
     dialogConfig.disableClose=true;
     dialogConfig.autoFocus=true;
     dialogConfig.width="60%";
     this.dialog.open(TransactionComponent,dialogConfig);

   }
   deleteTransaction(transactionNumber:number) {
    if (confirm('Are you sure to delete this record?'))
     this.service.deleteTransaction(transactionNumber).subscribe();
   }

   /*updateTransaction(transactionNumber:number) {
    this.formService.initializeFormGroup();
    const dialogConfig =new MatDialogConfig();
    dialogConfig.disableClose=true;
    dialogConfig.autoFocus=true;
    dialogConfig.width="60%";
    this.dialog.open(TransactionComponent,dialogConfig);
   }*/
   populateTransaction(transaction: any) {
    this.formService.populateTransaction(transaction);
    const dialogConfig =new MatDialogConfig();
    dialogConfig.disableClose=true;
    dialogConfig.autoFocus=true;
    dialogConfig.width="60%";
    this.dialog.open(TransactionComponent,dialogConfig);
    this.searchTransaction();
   }

   ngOnDestroy() {
     
   }
    
}
