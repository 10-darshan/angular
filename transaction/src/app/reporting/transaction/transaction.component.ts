import { Component, OnInit } from '@angular/core';
import { NotificationService } from 'src/app/notification.service';
import { TransactionService } from 'src/app/transaction.service';
import { FormService } from '../../form.service';
import { MatDialogRef } from '@angular/material/dialog';
import { ReportingComponent } from '../reporting.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon'; 

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {
  currency:string[];

  constructor(public formservice : FormService, private transactionservice: TransactionService,
     private notificationService: NotificationService,
      private dialogRef: MatDialogRef<TransactionComponent>) { }

  ngOnInit(): void {
    this.transactionservice.getCurrency().subscribe(data=>this.currency=data);
  }

  onClear() {
    this.formservice.form.reset();
    this.formservice.initializeFormGroup();
  }

  onSubmit() {
    if(this.formservice.form.valid)
    {
      if(!this.formservice.form.get('transactionNumber').value)
      this.formservice.insertTransaction(this.formservice.form.value);
      else
      this.formservice.updateTransaction(this.formservice.form.value);
      this.formservice.form.reset();
      this.formservice.initializeFormGroup();
      this.notificationService.succes("Transaction Completed Succesfully");
      this.onClose();
      
    }
  }
  onClose() {
    this.formservice.form.reset();
    this.formservice.initializeFormGroup();
    this.dialogRef.close();
  }

}
