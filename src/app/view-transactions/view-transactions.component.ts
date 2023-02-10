import { Component, Input } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Transaction } from '../models/Transaction';
import { TransactionItem } from '../models/TransactionItem';
import { SelfCheckoutService } from '../Services/self-checkout.service';

@Component({
  selector: 'app-view-transactions',
  templateUrl: './view-transactions.component.html',
  styleUrls: ['./view-transactions.component.scss']
})
export class ViewTransactionsComponent {

  @Input()
  transactions: Transaction[] = [];

  viewTransactions:Boolean = false;

  ngOnInit(){
    this.ViewTransactions();
  }

  constructor(public selfSvc: SelfCheckoutService, private router:Router, private formBuilder: FormBuilder){}

  ViewTransactions(){
    this.transactions = [];
    let transactionItems: TransactionItem[];
    transactionItems = [];
    this.selfSvc.viewTransactions().subscribe((items:any) => {
      for(let item in items){
        transactionItems = [];
        for(let object in items[item].transactionItems){
          transactionItems.push(new TransactionItem(items[item].transactionItems[object].itemId, items[item].transactionItems[object].name, items[item].transactionItems[object].priceBought, 
            items[item].transactionItems[object].quantityBought));
        }

        this.transactions.push(new Transaction(items[item].id,items[item].purchaseDate, transactionItems));
      }
      
    }
    );
    
    this.viewTransactions = !this.viewTransactions;
  }

  goBack(){
    this.router.navigate(["/admin"]);
  }

}
