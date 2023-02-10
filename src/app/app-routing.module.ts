import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { DepartmentListComponent } from './department-list/department-list.component';
import { InventoryTableComponent } from './inventory-table/inventory-table.component';
import { SearchItemsComponent } from './search-items/search-items.component';
import { ViewTransactionsComponent } from './view-transactions/view-transactions.component';

const routes: Routes = [
  {path: 'checkout', component: CheckoutComponent},
  {path: '', redirectTo: 'checkout', pathMatch: 'full' },
  {path: 'admin', component: AdminComponent},
  {path: 'admin/viewAll', component: InventoryTableComponent},
  {path: 'admin/viewDepartments', component: DepartmentListComponent},
  {path: 'admin/searchItem', component: SearchItemsComponent},
  {path: 'admin/viewTransactions', component: ViewTransactionsComponent},
  {path: 'admin/viewTransactions', component: ViewTransactionsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
