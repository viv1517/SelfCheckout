import { TransactionItem } from "./TransactionItem";

export class Transaction{
    id:number;
    date: string;
    items: TransactionItem[];

    constructor(id:number, date:string, items: TransactionItem[]){
        this.id = id;
        this.date = date;
        this.items = items;
    }
}