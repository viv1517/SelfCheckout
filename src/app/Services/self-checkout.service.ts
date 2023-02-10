import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
import { Department } from '../models/Department';
import { Receipt } from '../models/Receipt';
import { ItemDto } from '../models/ItemDto';

@Injectable({
  providedIn: 'root'
})
export class SelfCheckoutService {

  constructor(public router:Router, private http: HttpClient) { }

  // GetItem(upc:string){
  //   return this.http.get("http://localhost:5034/SelfCheckout/GetItemsByUPC/${upc}")
  // }

  GetDepartments(){
    let departmentList: Department[] = [];
    return this.http.get("http://localhost:5034/SelfCheckout/GetAllDepartments").pipe(map((item:any) =>{
      
      for (let department in item){
        let dep = new Department(item[department].departmentName, item[department].id);
        departmentList.push(dep);
        
      }
      return departmentList;
    }));
    
  }

  editDepartment(oldName:string, newName:string){    
    return this.http.get("http://localhost:5034/SelfCheckout/EditDepartmentName?oldName=" + oldName +"&newName="+ newName);
  }

  viewAllItems(){
    return this.http.get("http://localhost:5034/SelfCheckout/ViewAllItems");
  }

  GetIndividualItem(upc:string){
    return this.http.get("http://localhost:5034/SelfCheckout/GetItemsByUPC?upc=" + upc);
  }

  editItem(value:any){

    console.log("value", value);
    let returnValue = this.http.post("http://localhost:5034/SelfCheckout/AddItem", value);
    return returnValue;
  }

  viewTransactions(){
    return this.http.get("http://localhost:5034/SelfCheckout/ViewTransactions");
  }

  searchByUPC(upc:string){
    return this.http.get("http://localhost:5034/SelfCheckout/GetItemsByUPC?upc="+upc);
  }

  searchByDepartment(department:string){
    return this.http.get("http://localhost:5034/SelfCheckout/GetItemsByDepartment?department="+department);
  }

  getSummary(receipt: Receipt){
    
    console.log("receipt", receipt);
    return this.http.post("http://localhost:5034/SelfCheckout/ProcessPayment", receipt);
    // return this.http.post("http://localhost:5034/SelfCheckout/ProcessPayment", receipt);
  }

  deleteItem(upc:string){
    return this.http.get("http://localhost:5034/SelfCheckout/RemoveItem?upc="+upc);
  }

  addItem(item:ItemDto){
    return this.http.post("http://localhost:5034/SelfCheckout/AddItem", item);
  }
}
