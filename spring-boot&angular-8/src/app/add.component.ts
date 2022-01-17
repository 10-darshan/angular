import { Component, OnInit } from '@angular/core';
import { Employee } from './employee';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  employee:Employee=new Employee();
  message:any;
  constructor(private service : EmployeeService) { }

  ngOnInit(): void {
  }
  addEmployee() {
    this.service.addEmployee(this.employee).subscribe(data=>this.message=data);

  }

}
