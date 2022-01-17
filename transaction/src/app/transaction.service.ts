import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Transaction } from './transaction';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  constructor(private http: HttpClient) { }

  public searchTransaction(settlementFromDate:string, settlementToDate:string):Observable<any> {
    return this.http.get("http://localhost:8080/transaction/"+settlementFromDate+"/"+settlementToDate);
  }
  
  public getCurrency():Observable<any> {
    return this.http.get("http://localhost:8080/transaction/currency");
  }

  public getAllTransaction():Observable<any> {
    return this.http.get("http://localhost:8080/transaction/");
  }

  public deleteTransaction(transactionNumber:number):Observable<any> {
    return this.http.delete("http://localhost:8080/transaction/"+transactionNumber);
  }

  public performTransaction(transaction:Transaction):Observable<object> {
    return this.http.post("http://localhost:8080/transaction/",transaction);
  }

  public updateTransaction(transaction:Transaction):Observable<object> {
    console.log(transaction.transactionAmount);
    return this.http.put("http://localhost:8080/transaction/",transaction);
  }
}
