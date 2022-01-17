import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './employee.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Employee } from './employee';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  e_id:any;
  message:any;
  employee:Employee=new Employee();

  constructor(private service:EmployeeService, private route: ActivatedRoute, private location: Location) { }

  ngOnInit(): void {
    this.e_id=this.route.snapshot.paramMap.get('e_id');
  }

  updateEmployee() {
    this.employee.e_id=this.e_id;
    this.service.updateEmployee(this.employee).subscribe(data=>this.message=data);
  }

  goBack():void {
    this.location.back();
  }

}
