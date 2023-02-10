export class ItemDto{
    upc?:string;
    itemName?:string;
    price?:number;
    discount?:number;
    quantity?:number;
    departmentName?:string;
    isTaxed?:Boolean;
    isDiscontinued?:Boolean;

    constructor(upc?:string, itemName?:string, price?:number, discount?:number,
        quantity?:number, departmentName?:string, isTaxed?:Boolean, isDiscontinued?:Boolean){
            this.upc = upc;
            this.itemName = itemName;
            this.price = price;
            this.discount = discount;
            this.quantity = quantity;
            this.departmentName = departmentName;
            this.isTaxed = isTaxed;
            this.isDiscontinued = isDiscontinued;
        }
}