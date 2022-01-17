import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ReportingComponent } from './reporting/reporting.component';
import { TransactionService } from './transaction.service';
import { LiquidityComponent } from './liquidity/liquidity.component';
import { AgGridModule } from 'ag-grid-angular';
import { MaterialModule } from './material/material.module';
import { FormService } from './form.service';
import { fromPromise } from 'rxjs/internal-compatibility';
import { TransactionComponent } from './reporting/transaction/transaction.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NotificationService } from './notification.service';
import { CellRenderComponent } from './reporting/cell-render/cell-render.component';


@NgModule({
  declarations: [
    AppComponent,
    ReportingComponent,
    LiquidityComponent,
    TransactionComponent,
    CellRenderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CommonModule,
    MaterialModule,
    AgGridModule.withComponents([])
  ],
  providers: [TransactionService, FormService, NotificationService],
  bootstrap: [AppComponent],
  entryComponents: [TransactionComponent, CellRenderComponent]
})
export class AppModule { }
