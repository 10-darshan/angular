import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { Transaction } from './transaction';
import { TransactionService } from './transaction.service';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor(private service: TransactionService) { }
  form: FormGroup =new FormGroup(
    {
      transactionNumber: new FormControl(null),
      toAccountNumber:new FormControl('',[Validators.required, Validators.minLength(10)]),
      transactionAmount:new FormControl('',[Validators.required, Validators.minLength(3)]),
      transactionCurrency:new FormControl('',Validators.required),
      transactionDate:new FormControl('',Validators.required)
    }
  );

  initializeFormGroup() {
    this.form.setValue(
      {
        transactionNumber:null,
        toAccountNumber:'',
        transactionAmount:'',
        transactionCurrency:'',
        transactionDate:''
      }
    );
  }

  insertTransaction(transaction:Transaction) {
    this.service.performTransaction(transaction).subscribe();
  }
  updateTransaction(transaction:Transaction) {
    this.service.updateTransaction(transaction).subscribe();
  }
  populateTransaction(transaction:any) {
    this.form.setValue(transaction);
  }
}
