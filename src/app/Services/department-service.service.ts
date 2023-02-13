import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DepartmentServiceService {

  constructor(public router:Router, private http: HttpClient) { }

  GetDepartments(){
    return this.http.get("http://localhost:5034/odata/Departments");
  }

}
