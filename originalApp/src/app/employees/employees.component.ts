import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  title:string="Employee List";
  employees =[
    {
      "id": 101,
      "name":"Darshan"
    },
    {
      "id": 102,
      "name":"Disha"
    },
    {
      "id": 103,
      "name":"Tina"
    },
    {
      "id": 104,
      "name":"Ritu"
    }
  ]

}
