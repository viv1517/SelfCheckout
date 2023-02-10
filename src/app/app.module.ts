import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ZXingScannerModule } from '@zxing/ngx-scanner';
import { AdminComponent } from './admin/admin.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InventoryTableComponent } from './inventory-table/inventory-table.component';
import { AddItemComponent } from './add-item/add-item.component';
import { DepartmentListComponent } from './department-list/department-list.component';
import { SearchItemsComponent } from './search-items/search-items.component';
import { ViewTransactionsComponent } from './view-transactions/view-transactions.component';
import { CartComponentComponent } from './cart-component/cart-component.component';
// import { DepartmentListComponent } from './department-list/department-list.component';


@NgModule({
  declarations: [
    AppComponent,
    CheckoutComponent,
    // ScannerComponent,
    AdminComponent,
    InventoryTableComponent,
    AddItemComponent,
    DepartmentListComponent,
    SearchItemsComponent,
    ViewTransactionsComponent,
    CartComponentComponent,
    // DepartmentListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ZXingScannerModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
