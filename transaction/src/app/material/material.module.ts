import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatGridListModule, // for grid column
    MatFormFieldModule, //form
    MatInputModule, //input
    MatRadioModule, //mat-radio-group - radio button
    MatDatepickerModule, //matDatepicker - datepicker
    MatNativeDateModule, //required for datepicker
    MatSelectModule, //mat-select - dropdown
    MatCheckboxModule, //mat-checkbox - checkbox
    MatButtonModule, // for button
    MatDialogModule,
    MatIconModule,
    MatToolbarModule
  ],
  exports: [
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatCheckboxModule,
    MatButtonModule,
    MatSnackBarModule,
    MatDialogModule,
    MatToolbarModule,
    MatIconModule
  ]
})
export class MaterialModule { }
