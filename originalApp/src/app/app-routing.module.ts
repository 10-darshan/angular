import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeesComponent } from './employees/employees.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  { path : '', component : AboutComponent},
  { path : 'employees', component : EmployeesComponent},
  { path : 'employees/:emp', component: EmployeeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
