import { ItemDto } from "./ItemDto";

export class Receipt{
    itemsBought: ItemDto[];
    amountBought: number[];
    priceBought: number[];

    constructor(itemsBought: ItemDto[], amountBought: number[], priceBought: number[]){
        this.itemsBought = itemsBought;
        this.amountBought = amountBought;
        this.priceBought = priceBought;
    }
}