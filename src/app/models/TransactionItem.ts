export class TransactionItem{
    id: number;
    name: string;
    priceBought: number;
    quantityBought: number;

    constructor(id:number, name:string, priceBought: number, quantityBought: number){
        this.id = id;
        this.name = name; 
        this.priceBought = priceBought;
        this.quantityBought = quantityBought;
    }
}