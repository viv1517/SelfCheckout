export class Item{
    upc: string;
    name: string;
    price: number;
    discount: number;
    quantity:number;
    isTaxed: Boolean;
    isDiscontinued: Boolean;
    department:string;

    constructor(upc:string, name:string, price:number, discount:number=0, quantity:number, isTaxed:Boolean, isDiscontinued:Boolean, department:string){
        this.upc = upc;
        this.name = name;
        this.price = price;
        this.discount = discount;
        this.quantity = quantity;
        this.isTaxed = isTaxed;
        this.isDiscontinued = isDiscontinued;
        this.department = department;
    }
}