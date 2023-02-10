import { Component, Input } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { CartItem } from '../models/CartItem';
import { ItemDto } from '../models/ItemDto';
import { SelfCheckoutService } from '../Services/self-checkout.service';

@Component({
  selector: 'app-cart-component',
  templateUrl: './cart-component.component.html',
  styleUrls: ['./cart-component.component.scss']
})
export class CartComponentComponent {

  
  itemsInCar: ItemDto[] = [];

  oldItemsInCar: number[] = [];

  
  itemsToBuy: string[] = [];

  @Input()
  itemToPurchaseUPC: string = "";

  amountBought?: number[] = [];

  priceBought?: number[] = [];

  @Input()
  itemsToDispaly: CartItem[] = [];

  reload:Boolean = false;

  @Input()
  subtotal?:number = 0;

 
  

  increaseAmount(item: CartItem){
    let itemToFind = new ItemDto(item.item.upc,item.item.itemName, item.item.price, item.item.discount,
      item.item.quantity, item.item.departmentName, item.item.isTaxed, item.item.isDiscontinued);
    this.searchItemsToDisplay(itemToFind);
    this.itemsToDispaly = this.itemsToDispaly;
    this.reload = true;
    this.reload = false;
  }

  decreaseAmount(item: CartItem){
    let itemToFind = new ItemDto(item.item.upc,item.item.itemName, item.item.price, item.item.discount,
      item.item.quantity, item.item.departmentName, item.item.isTaxed, item.item.isDiscontinued);
    this.searchItemsToDisplayToDecrease(itemToFind);
    this.reload = true;
    this.reload = false;
  }

  searchItemsToDisplay(item: ItemDto){
    for(let i = 0; i < this.itemsInCar.length; i++){
      if(this.itemsToDispaly[i].item.upc == item.upc){
        this.itemsToDispaly[i].amount += 1;
      }
    }
    this.itemsToDispaly = this.itemsToDispaly;
  }

  searchItemsToDisplayToDecrease(item: ItemDto){
    for(let i = 0; i < this.itemsInCar.length; i++){
      if(this.itemsToDispaly[i].item.upc == item.upc){
        this.itemsToDispaly[i].amount -= 1;
      }
    }
    this.itemsToDispaly = this.itemsToDispaly;
  }

  
}
