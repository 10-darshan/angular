import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from './employee';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }

  addEmployee(employee:Object):Observable<Object> {
    return this.http.post("http://localhost:8080/employees",employee,{responseType: 'text' as 'json'});
  }
  deleteEmployee(e_id:number):Observable<any> {
    return this.http.delete("http://localhost:8080/employees/"+e_id);
  }
  findEmployee(e_id:number):Observable<any> {
    return this.http.get("http://localhost:8080/employees/"+e_id);
  }
  findAllEmployee():Observable<any> {
    return this.http.get("http://localhost:8080/employees");
  }
  updateEmployee(employee:Object):Observable<Object> {
    return this.http.put("http://localhost:8080/employees",employee,{responseType: 'text' as 'json'});
  }
}
