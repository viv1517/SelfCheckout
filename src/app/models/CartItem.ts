import { ItemDto } from "./ItemDto";

export class CartItem{
    item: ItemDto;
    amount: number;
    price: number;
    
    constructor(item:ItemDto, amount:number, price: number){
        this.item = item;
        this.amount = amount;
        this.price = price;
    }
}