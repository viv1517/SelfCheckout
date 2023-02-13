import { Component, ViewChild, ViewChildren } from '@angular/core';
import { DxDataGridComponent, DxSelectBoxModule, DxCheckBoxModule, DxButtonComponent } from 'devextreme-angular';
import { DxLookupModule } from 'devextreme-angular';
import 'devextreme/data/odata/store';
import config from 'devextreme/core/config';
import { DepartmentServiceService } from '../Services/department-service.service';
import { jsPDF } from 'jspdf';
import { exportDataGrid as exportDataGridToPdf } from 'devextreme/pdf_exporter';
import { Workbook } from 'exceljs';
import { exportDataGrid } from 'devextreme/excel_exporter';
import { saveAs } from 'file-saver';
import themes from "devextreme/ui/themes"
// themes.current("generic.contrast");

@Component({
  selector: 'app-data-grid',
  templateUrl: './data-grid.component.html',
  styleUrls: ['./data-grid.component.scss']
})
export class DataGridComponent {

  dataSource:any;
  departments: any[] = [];
  // departmentDataSource:any;

  @ViewChild(DxDataGridComponent, { static: false }) grid?: DxDataGridComponent;
  @ViewChild(DxButtonComponent, { static: false }) button?: DxButtonComponent;

  selectedRowIndex = -1;

  //////////////////////////
  readonly allowedPageSizes = [5];

  readonly displayModes = [{ text: "Display Mode 'full'", value: 'full' }, { text: "Display Mode 'compact'", value: 'compact' }];

  displayMode = 'full';

  showPageSizeSelector:boolean = true;

  showInfo = true;

  showNavButtons = true;

  customizeColumns(columns:any) {
    columns[0].width = 70;
  }

  get isCompactMode() {
    return this.displayMode === 'compact';
  }
  /////////////////////////

  

  constructor(public depSvc: DepartmentServiceService){
    depSvc.GetDepartments().subscribe((item:any) => {
      console.log("item", item);
      this.departments = item.value;
      console.log("here",this.departments);
      console.log(item);
      
      
    })
    
    this.dataSource = {
      store: {
        type: 'odata',
        url: 'http://localhost:5034/odata/Items',
        key: 'Upc',
        version: 4,
      },
    };
  }

  addRow() {
    this.grid?.instance.addRow();
    this.grid?.instance.deselectAll();
  }

  editRow() {
    this.grid?.instance.editRow(this.selectedRowIndex);
    this.grid?.instance.deselectAll();
  }

  deleteRow() {
    this.grid?.instance.deleteRow(this.selectedRowIndex);
    this.grid?.instance.deselectAll();
  }

  selectedChanged(e:any) {
    this.selectedRowIndex = e.component.getRowIndexByKey(e.selectedRowKeys[0]);
  }

  onExporting(e:any) {
    const workbook = new Workbook();
    const worksheet = workbook.addWorksheet('Employees');

    exportDataGrid({
      component: e.component,
      worksheet,
      autoFilterEnabled: true,
    }).then(() => {
      workbook.xlsx.writeBuffer().then((buffer) => {
        saveAs(new Blob([buffer], { type: 'application/octet-stream' }), 'DataGrid.xlsx');
      });
    });
    e.cancel = true;
  }

  changeTheme() {
    themes.ready(() => {
        this.grid?.instance.repaint();
        this.button?.instance.repaint();
    });
    themes.current('generic.light');
    // themes.current('generic.dark');
  }
  
}
