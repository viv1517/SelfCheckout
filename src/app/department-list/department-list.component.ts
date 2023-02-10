import { Component, Input } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { SelfCheckoutService } from '../Services/self-checkout.service';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.scss']
})
export class DepartmentListComponent {

  @Input()
  departments?: string[] = [];

  currDepartment:string = "";

  newDepartment = this.formBuilder.group({
    newName: ""
  });

  constructor(public selfSvc: SelfCheckoutService, private router:Router, private formBuilder: FormBuilder){}

  ngOnInit(){
    this.departments = [];
    this.selfSvc.GetDepartments().subscribe(item => {
      for (let department in item){
        this.departments?.push(item[department].departmentName);
      }
    });
  }

  editDepartment(departmentName:string){
    this.currDepartment = departmentName;
  }

  onSubmit(){
    if(this.newDepartment.value.newName){
      this.selfSvc.editDepartment(this.currDepartment, this.newDepartment.value.newName).subscribe();
    }
    window.location.reload();
    this.router.navigate(["/admin/viewDepartments"]);
    
  }

  goBack(){
    this.router.navigate(["/admin"]);
  }

}
