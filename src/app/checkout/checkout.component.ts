import { Component, Input } from '@angular/core';
import { Item } from '../models/Item';
import { SelfCheckoutService } from '../Services/self-checkout.service';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ItemDto } from '../models/ItemDto';
import { Receipt } from '../models/Receipt';
import { CartItem } from '../models/CartItem';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent {

  itemsToDispaly: CartItem[] = [];
  itemsToBuy: string[] = [];

  itemsInCar: ItemDto[] = [];

  amountBought?: number[] = [];

  priceBought?: number[] = [];

  receipt?: Receipt;

  total:number = 0;


  itemToPurchase: string = "";


  ngOnChanges(){
    console.log("changes happened");
    
  }

  ngOnInit(){
    if(this.itemsInCar){
      console.log(this.itemsInCar);
      
    }
  }

  cartInfo = this.formBuilder.group({
    upc: "",
  })

  constructor(public selfSvc: SelfCheckoutService, private formBuilder: FormBuilder, public router:Router){

  }

//   AddItem(upc:string){
//     console.log("upc", upc);
//     this.selfSvc.GetIndividualItem(upc).subscribe((item:any) =>{
//       let newItem = new ItemDto(item[0].upc, item[0].itemName, item[0].price, item[0].discount,
//         item[0].quantity, item[0].isTaxed, item[0].isDiscontinued, item[0].department.departmentName);
//         if(this.searchCart(newItem)){
//           let index = this.findIndex(item);
//           if(this.amountBought){
//             this.amountBought[index] += 1;
//           }
          
//         }
//         else{
//           this.itemsInCar.push(newItem);
//           this.amountBought?.push(1);
//           if(newItem.price){
//             this.priceBought?.push(newItem.price);
//           }
//         }
        
        
//       console.log(newItem);
      
//     });
//     console.log(this.itemsInCar);
    
//   }

//   searchCart(item: ItemDto){
//     if(this.itemsInCar){
//       for(let i = 0; i < this.itemsInCar.length; i++){
//         if(this.itemsInCar[i].upc == item.upc){
//           return true;
//         }
//       }
//     }
//     return false;
    
// }

// findIndex(item: ItemDto){
//   if(this.itemsInCar){
//     for(let i = 0; i < this.itemsInCar.length; i++){
//       if(this.itemsInCar[i].upc == item.upc){
//         return i;
//       }
//     }
//   }
//   return -1;
// }

  // AddItem(upc:string){
  //   console.log("upc", upc);
  //   this.selfSvc.GetIndividualItem(upc).subscribe((item:any) =>{
  //     let newItem = new ItemDto(item[0].upc, item[0].itemName, item[0].price, item[0].discount,
  //       item[0].quantity, item[0].isTaxed, item[0].isDiscontinued, item[0].department.departmentName);
  //       this.itemsInCar?.push(newItem);
  //       this.amountBought?.push(1);
  //       if(newItem.price){
  //         this.priceBought?.push(newItem.price);
  //       }
        
  //     console.log(newItem);
      
  //   });
  // }

  onSubmit(){
    if(this.cartInfo.value.upc){
      console.log("changing");
      
      this.itemToPurchase = this.cartInfo.value.upc;
      // this.itemsInCar = [];
      this.itemsToBuy.push(this.cartInfo.value.upc);
      this.AddItem(this.cartInfo.value.upc)
      // this.AddItem(this.cartInfo.value.upc);
    }
    // location.reload();
    // this.router.navigate(["checkout"]);
  }

  subtotal:number = 0;

  getSummary(){
    console.log("hello", this.receipt);
    
    if(this.itemsInCar && this.amountBought && this.priceBought){
      console.log("in car", this.itemsInCar);
      console.log("amount", this.amountBought);
      console.log("price", this.priceBought);
      
      
      
      let newReceipt = new Receipt(this.itemsInCar, this.amountBought, this.priceBought);
      console.log("receipt", newReceipt);
      
      // this.selfSvc.getSummary(newReceipt).subscribe((item:any) => {
        
        
      // });
    }
    // console.log("cart",this.itemsInCar);
    // if (this.itemsInCar && this.amountBought && this.priceBought){
    //   this.receipt = new Receipt(this.itemsInCar, this.amountBought, this.priceBought);
    //   this.selfSvc.getSummary(this.receipt);
    // }
    
    // this.router.navigate(["checkout"]);
  }

  AddItem(upc:string){
    console.log("upc", upc);
    this.selfSvc.GetIndividualItem(upc).subscribe((item:any) =>{
      let newItem = new ItemDto(item[0].upc, item[0].itemName, item[0].price, item[0].discount,
        item[0].quantity, item[0].isTaxed, item[0].isDiscontinued, item[0].department.departmentName);
        if(this.searchCart(newItem)){
          this.searchItemsToDisplay(newItem);
          let index = this.findIndex(item);
          if(this.amountBought){
            this.amountBought[index] += 1;
          }
          
        }
        else{
          this.itemsInCar.push(newItem);
          if(newItem.price){
            this.itemsToDispaly.push(new CartItem(newItem, 1, newItem.price));
          }
          
          this.amountBought?.push(1);
          if(newItem.price){
            this.priceBought?.push(newItem.price);
          }
        }
        this.calculateSubtotal();
        
      console.log(newItem);
      
    });
  }

  searchCart(item: ItemDto){
      if(this.itemsInCar){
        for(let i = 0; i < this.itemsInCar.length; i++){
          if(this.itemsInCar[i].upc == item.upc){
            return true;
          }
        }
      }
      return false;
      
  }

  findIndex(item: ItemDto){
    if(this.itemsInCar){
      for(let i = 0; i < this.itemsInCar.length; i++){
        if(this.itemsInCar[i].upc == item.upc){
          return i;
        }
      }
    }
    return -1;
  }

  printCart(){
    console.log(this.itemsInCar);
    
  }

  searchItemsToDisplay(item: ItemDto){
    for(let i = 0; i < this.itemsInCar.length; i++){
      if(this.itemsToDispaly[i].item.upc == item.upc){
        this.itemsToDispaly[i].amount += 1;
      }
    }
  }

  calculateSubtotal(){
    let total = 0;
    for(let i = 0; i < this.itemsToDispaly.length; i++){
      total = this.itemsToDispaly[i].amount * this.itemsToDispaly[i].price
    }
    this.subtotal = total;
  }

 

}
