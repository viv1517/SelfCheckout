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
import { DxButtonModule, DxCheckBoxModule, DxDataGridModule, DxLookupModule, DxSelectBoxModule, DxSpeedDialActionModule, DxTreeListModule } from 'devextreme-angular';
import { DataGridComponent } from './data-grid/data-grid.component';


@NgModule({
  declarations: [
    AppComponent,
    CheckoutComponent,
    AdminComponent,
    InventoryTableComponent,
    AddItemComponent,
    DepartmentListComponent,
    SearchItemsComponent,
    ViewTransactionsComponent,
    CartComponentComponent,
    DataGridComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ZXingScannerModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    DxDataGridModule,
    DxSpeedDialActionModule,
    DxSelectBoxModule,
    DxCheckBoxModule,
    DxLookupModule,
    DxTreeListModule,
    DxButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
