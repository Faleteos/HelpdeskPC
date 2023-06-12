import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from 'src/app/Services/api.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { TableService } from './../../Services/table.service';
import { FormusuariosComponent } from 'src/app/Formularios/formusuarios/formusuarios.component';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit{
  column:Object;
  displayedColumns: string[]=[]
  dataSource!: MatTableDataSource<any>;

  title="Usuarios"
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort; 

  constructor(public Api: ApiService, public TableService: TableService,public dialog: MatDialog ){
    this.dataSource=new MatTableDataSource();
  }
  ngOnInit(): void {
    this.GetUsuarios();
  //  throw new Error('Method not implemented.');
  }

  openModal() {
    const dialogRef = this.dialog.open(FormusuariosComponent);
  }

 public async GetUsuarios(){
  //var response=this.Api.Get("Personas");
  this.TableService.titleTabla="Usuarios";
  this.TableService.controlador = "Usuarios";
//   await this.Api.get("Usuarios").then((res)=>{

//     this.displayedColumns=Object.keys(res[0])
//       // this.loadTable([res[0]])
//       this.dataSource.data=res
//  });
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
