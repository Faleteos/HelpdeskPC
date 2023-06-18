import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from 'src/app/Services/api.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { TableService } from './../../Services/table.service';
import { FormpersonasComponent } from 'src/app/Formularios/formpersonas/formpersonas.component';
import { FormsService } from 'src/app/Services/forms.service';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent implements OnInit {
  column:Object;
  displayedColumns: string[]=[]
  dataSource!: MatTableDataSource<any>;

  title="Personas"
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort; 
   
  constructor(public Api: ApiService, public TableService: TableService,public dialog: MatDialog, public forms:FormsService){
    this.dataSource=new MatTableDataSource();
  }
  ngOnInit(): void {
    this.GetPersonas();
    
  //  throw new Error('Method not implemented.');
  }
  
  openModal() {
    const dialogRef = this.dialog.open(FormpersonasComponent);
  }

 public async GetPersonas(){
  //var response=this.Api.Get("Personas");
  this.TableService.titleTabla="Personas";
  this.TableService.controlador = "Personas";
  await this.Api.get("Personas").then((res)=>{

    this.displayedColumns=Object.keys(res[0])
      // this.loadTable([res[0]])
      this.dataSource.data=res
 });
 this.dataSource.paginator=this.paginator;
 this.dataSource.sort=this.sort

}
applyFilter(event: Event) {
  const filterValue = (event.target as HTMLInputElement).value;
  this.dataSource.filter = filterValue.trim().toLowerCase();

  if (this.dataSource.paginator) {
    this.dataSource.paginator.firstPage();
  }
}

}