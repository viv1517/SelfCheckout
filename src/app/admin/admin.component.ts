import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { SelfCheckoutService } from '../Services/self-checkout.service';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {

  constructor(public selfSvc: SelfCheckoutService, private formBuilder: FormBuilder, public router:Router){}

  toggleShowDepartments(){
    this.router.navigate(["/admin/viewDepartments"]);
  }

  toggleSearchItems(){
    this.router.navigate(["/admin/searchItem"]);
  }

  viewAllItems(){
    this.router.navigate(["/admin/viewAll"]);
  }

  ViewTransactions(){
    this.router.navigate(["/admin/viewTransactions"]);
  }

}

