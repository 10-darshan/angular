import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NewComponent} from  './new/new.component';
import { Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: NewComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class NewRoutingModule { }
