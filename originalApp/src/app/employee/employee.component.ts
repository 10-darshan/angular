import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  id:any;
  constructor(private route : ActivatedRoute, private location : Location) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.paramMap.get("emp");
  }

  goBack():void {
     this.location.back();
  }

}
