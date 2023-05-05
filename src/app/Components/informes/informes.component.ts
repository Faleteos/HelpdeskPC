import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from 'src/app/Services/api.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { TableService } from './../../Services/table.service';
import { ForminformesComponent } from 'src/app/Formularios/forminformes/forminformes.component';

@Component({
  selector: 'app-informes',
  templateUrl: './informes.component.html',
  styleUrls: ['./informes.component.css']
})
export class InformesComponent implements OnInit{
  column:Object;
  displayedColumns: string[]=[]
  dataSource!: MatTableDataSource<any>;

  title="Informes"
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(public Api: ApiService, public TableService: TableService,public dialog: MatDialog ){
    this.dataSource=new MatTableDataSource();
  }
  ngOnInit(): void {
    this.GetInformes();
  //  throw new Error('Method not implemented.');
  }

  openModal() {
    const dialogRef = this.dialog.open(ForminformesComponent);
  }

 public async GetInformes(){
  //var response=this.Api.Get("Personas");
  this.TableService.titleTabla="Informes";
  this.TableService.controlador = "Informes";
  await this.Api.get("Informes").then((res)=>{

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
