import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AgGridAngular } from 'ag-grid-angular';
import { GridApi,GridReadyEvent, ValueGetterParams, PaginationNumberFormatterParams} from 'ag-grid-community';
import { MoreInfoButtonComponent } from '../more-info-button/more-info-button.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-manage-staff',
  templateUrl: './manage-staff.component.html',
  styleUrls: ['./manage-staff.component.css']
})
export class ManageStaffComponent {

  private gridApi!: GridApi;

  // Defining columns using AG Grid
  public columnDefs = [
    {headerName: 'Staff ID', valueGetter: staffId, filter: 'agTextColumnFilter'},
    {headerName: 'First Name', field: 'firstName', hide: true},
    {headerName: 'Last Name', field: 'lastName', hide: true},
    {headerName: 'Full Name', valueGetter: concatName, filter: 'agTextColumnFilter'},
    {headerName: 'Contact No', field: 'telNo'},
    {headerName: 'Email', field: 'email'},
    {headerName: 'Address', field: 'address'},
    {headerName: 'NIC', field: 'nic', filter: 'agNumberColumnFilter', hide: true},
    {headerName: 'More Info', cellRenderer: MoreInfoButtonComponent, 
    cellRendererParams: { data: this }, sortable: false, filter: false}  // Rendering More-Info drop down list
  ];

  onGridReady(params: GridReadyEvent) {
    this.gridApi = params.api; //Getting parameters through Grid API
  }

  // Method to change the table data according to the search bar inputs
  onFilterTextBoxChanged() {
    this.gridApi.setQuickFilter(
      (document.getElementById('searchFeature') as HTMLInputElement).value
    );
  }

  rowData! : any [];
  rowHeight = 50;
  paginationPageSize = 5;

constructor(private router: Router, 
  private route: ActivatedRoute) { }

receptionForm(pageName: string): void{
  this.router.navigate([`$[pageName]`]);
}

ngOnInit(){
  this.showStaffData();
}

//customizze AG Grid Columns
defaultColDef = { 
  sortable: true,
  filter: true,
  unSortIcon: true,
  suppressMovable:true,
};

public paginationNumberFormatter: (
  params: PaginationNumberFormatterParams
) => string = (params: PaginationNumberFormatterParams) => {
  return '[' + params.value.toLocaleString() + ']';
};

onPageSizeChanged() {
  var value = (document.getElementById('pageSize') as HTMLInputElement).value;
  this.gridApi.paginationSetPageSize(Number(value));
}

showStaffData(){
  var value = (document.getElementById('showStaffData') as HTMLInputElement).value;
  if(value=="teacher"){
    fetch('http://localhost:8080/api/v1/teacher')  //Fetch data through the JSON data file
    .then(result => result.json())
    .then(rowData => this.rowData = rowData);
  }
  else if(value=="receptionist"){
    fetch('http://localhost:8080/api/v1/reception')  //Fetch data through the JSON data file
    .then(result => result.json())
    .then(rowData => this.rowData = rowData);
  }
}

}

function concatName(params: ValueGetterParams) {
  return params.data.firstName +' '+ params.data.lastName;
}

function staffId(params: ValueGetterParams){
  var value = (document.getElementById('showStaffData') as HTMLInputElement).value;
  if(value=="teacher"){
    return params.data.teacherId;
  }
  else if(value=="receptionist"){
    return params.data.receptionId;
  }

  
}
