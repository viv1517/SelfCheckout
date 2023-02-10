import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Item } from '../models/Item';
import { SelfCheckoutService } from '../Services/self-checkout.service';
import { AbstractControl, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ItemDto } from '../models/ItemDto';

@Component({
  selector: 'app-inventory-table',
  templateUrl: './inventory-table.component.html',
  styleUrls: ['./inventory-table.component.scss']
})
export class InventoryTableComponent {
rowNumber:number = 1;

  @Input()
  adminItems: Item[] = [];

  things: string[] = ["hello", "yes", "no"];

  reload:Boolean = false;

  constructor(public selfSvc: SelfCheckoutService, public router: Router, private formBuilder: FormBuilder){
  }

  ngOnChanges(){
    // this.router.navigate(["/admin/viewAll"]);
    // this.ngOnInit();
    // this.router.navigateByUrl('/RefreshComponent', { skipLocationChange: true }).then(() => {
    //   this.router.navigate(['/admin/viewAll']);
      // window.location.reload();
      // this.router.navigate(["/admin/viewAll"]);
  
  }


  addItemInfo = this.formBuilder.group({
    upc: "",
    itemName: "",
    price: 0,
    discount: 0,
    quantity: 0,
    departmentName: "",
    isTaxed: false,
    isDiscontinued: false
  })


  onSubmit(){
        if(!this.addItemInfo.value.upc){
          this.addItemInfo.value.upc ="";
        }
        if(!this.addItemInfo.value.itemName){
          this.addItemInfo.value.itemName ="";
        }
        if(!this.addItemInfo.value.price){
          this.addItemInfo.value.price =0;
        }
        if(!this.addItemInfo.value.discount){
          this.addItemInfo.value.discount =0;
        }
        if(!this.addItemInfo.value.quantity){
          this.addItemInfo.value.quantity =0;
        }
        if(!this.addItemInfo.value.departmentName){
          this.addItemInfo.value.departmentName ="";
        }
        if(this.addItemInfo.value.isTaxed==null){
          this.addItemInfo.value.isTaxed =true;
        }
        if(this.addItemInfo.value.isDiscontinued==null){
          this.addItemInfo.value.isDiscontinued =false;
        }
        let item = new ItemDto(this.addItemInfo.value.upc, this.addItemInfo.value.itemName, this.addItemInfo.value.price,this.addItemInfo.value.discount,
          this.addItemInfo.value.quantity, this.addItemInfo.value.departmentName, this.addItemInfo.value.isTaxed, this.addItemInfo.value.isDiscontinued);
        this.selfSvc.addItem(item).subscribe((item:any) => console.log("received", item)
        );
        this.reload = true;
        window.location.reload();
      this.router.navigate(["/admin/viewAll"]);
    
 
  }

  ngOnInit(){
    this.adminItems = [];
    this.selfSvc.viewAllItems().subscribe((items:any) =>{
      for(let item in items){
        this.adminItems.push(new Item(
          items[item].upc,
          items[item].itemName,
          items[item].price,
          items[item].discount,
          items[item].quantity,
          items[item].isTaxed,
          items[item].isDiscontinued,
          items[item].department.departmentName
        ))
  
      }
      if(this.reload){
        this.reload = false;
        window.location.reload();
        this.router.navigate(["/admin/viewAll"]);
      }
    });

  }

  deleteItem(upc:string){
    console.log(name);
    this.selfSvc.deleteItem(upc).subscribe();
    this.adminItems = [];
    this.selfSvc.viewAllItems().subscribe((items:any) =>{
      for(let item in items){
        this.adminItems.push(new Item(
          items[item].upc,
          items[item].itemName,
          items[item].price,
          items[item].discount,
          items[item].quantity,
          items[item].isTaxed,
          items[item].isDiscontinued,
          items[item].department.departmentName
        ))
  
      }
    });
    window.location.reload();
    this.router.navigate(["/admin/viewAll"]);
 
  }

  goBack(){
    this.router.navigate(["/admin"]);
  }

  
}
