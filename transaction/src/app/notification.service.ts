import { Injectable } from '@angular/core';
import { MatRipple } from '@angular/material/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(public snackbar: MatSnackBar) { }

  config : MatSnackBarConfig ={
     duration:3000,
     horizontalPosition:'center',
     verticalPosition: 'top'
  }

  succes(msg) {
    this.snackbar.open(msg,"",this.config);
  }
}
