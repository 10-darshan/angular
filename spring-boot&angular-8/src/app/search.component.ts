import { Component, OnInit, OnDestroy } from '@angular/core';
import { EmployeeService } from './employee.service';
import { Employee } from './employee';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  empl: any;
  employee:any;
  e_id:number;

  constructor(private service: EmployeeService) {}

  deleteEmployee(e_id:number) {
    this.empl=null;
    this.service.deleteEmployee(e_id).subscribe(data=>this.employee=data);
  }

  findEmployee() {
    this.service.findEmployee(this.e_id).subscribe(data=>this.empl=data);
  }

  ngOnInit(): void {
    this.service.findAllEmployee().subscribe(data=>this.employee=data);
  }
}
