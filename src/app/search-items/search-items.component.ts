import { Component, Input } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Item } from '../models/Item';
import { SelfCheckoutService } from '../Services/self-checkout.service';

@Component({
  selector: 'app-search-items',
  templateUrl: './search-items.component.html',
  styleUrls: ['./search-items.component.scss']
})
export class SearchItemsComponent {

  @Input()
  foundItem?: Item;

  @Input()
  departmentItems?: Item[];

  searchInfo = this.formBuilder.group({
    upc: "",
    department: ""
  });

  upcFound: Boolean = false;

  departmentFound: Boolean = false;

  multipleFound: Boolean = false;

  showTable:Boolean = false;



  constructor(public selfSvc: SelfCheckoutService, private router:Router, private formBuilder: FormBuilder){}


  
  onSubmit(){
    console.log(this.searchInfo.value);

    if(this.searchInfo.value.upc != "" && this.searchInfo.value.upc != null && this.searchInfo.value.department && this.searchInfo.value.department != ""){
      this.multipleFound = true;
      this.upcFound = false;
      this.departmentFound = false;
      this.showTable = false;
      return;
    }
    
    if(this.searchInfo.value.upc != "" && this.searchInfo.value.upc != null){
      this.multipleFound = false;
      this.departmentItems = [];
      this.selfSvc.searchByUPC(this.searchInfo.value.upc).subscribe((item:any) =>{
        let newItem = new Item(item[0].upc, item[0].itemName, item[0].price,item[0].discount,item[0].quantity, item[0].isTaxed, item[0].isDiscontinued, item[0].department.departmentName);
        this.foundItem = newItem;
        this.upcFound = true;
        this.showTable = true;
     
      
      });
    }
    else{
      if(this.searchInfo.value.department){
        this.showTable = true;
        this.multipleFound = false;
        this.upcFound = false;
        console.log("in departments");
        
        this.departmentItems = [];
        this.selfSvc.searchByDepartment(this.searchInfo.value.department).subscribe((department:any)=>{
   
          for(let item in department){

            
            let newItem = new Item(department[item].upc,department[item].itemName,department[item].price, department[item].discount, department[item].quantity, department[item].isTaxed, department[item].isDiscontinued, department[item].department.departmentName);
            this.departmentItems?.push(newItem);
          }
        });
        this.departmentFound = true;
        console.log("department", this.departmentItems);
        
      }
    }
  }

  goBack(){
    this.router.navigate(["/admin"]);
  }
}
