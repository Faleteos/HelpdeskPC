import { ApiService } from './../../Services/api.service';
import { TableService } from './../../Services/table.service';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Title } from '@angular/platform-browser';
import Swal from 'sweetalert2';
import { MatDialog } from '@angular/material/dialog';
import { FormrserviciosComponent } from 'src/app/Formularios/formrservicios/formrservicios.component';
import { FormrepuestosComponent } from 'src/app/Formularios/formrepuestos/formrepuestos.component';
import { FormpersonasComponent } from 'src/app/Formularios/formpersonas/formpersonas.component';
import { ServiciosComponent } from '../servicios/servicios.component';
import { FormsService } from 'src/app/Services/forms.service';
import { ForminformesComponent } from 'src/app/Formularios/forminformes/forminformes.component';

@Component({
  selector: 'app-table-template',
  templateUrl: './table-template.component.html',
  styleUrls: ['./table-template.component.css']
})
export class TableTemplateComponent implements OnInit {
  @Input() component:string;
  @Input() titulo:string;
  @Input() service:string;
  column:Object;
  displayedColumns: string[]=[]
  dataSource!: MatTableDataSource<any>;
  action : any = "Actions";
  nameformServ : any = "Servicios";
  nameformRep : any = "Repuestos";
  nameformPer : any = "Personas";
  nameformInf : any = "Informes";
  nameform : any;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(public Api: ApiService, public TableService:TableService,public dialog: MatDialog, public forms:FormsService){
    this.dataSource=new MatTableDataSource();
  }

  formButton():void{
    

  }

  openModal() {
    
    
  }
  ngOnInit(): void {
    
  this.datosTabla();
  }

  public async datosTabla(){
   
    await this.Api.get(this.TableService.controlador).then((res)=>{
      this.displayedColumns=Object.keys(res[0])
      this.dataSource.data=res
      this.TableService.dataSource=res
      this.displayedColumns.push( this.action)
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

  delete(row:any): void {
       let getId=Object.values(row)[0];

     this.Api.Delete(this.component,getId.toString())
  }

  edit(object: any) {

    switch (this.component) {

      case this.nameformPer:{

        this.forms.object=object;
        this.forms.objexample.next(object)
        console.log(object)
        this.forms.component.next(this.nameformPer)
        this.dialog.open(FormpersonasComponent);
        break;
      }
      case this.nameformServ:{

        this.forms.object=object;
        this.forms.component.next(this.nameformServ)
        this.dialog.open(FormrserviciosComponent);
        break;
      }
      case this.nameformRep:{

        this.forms.object=object;
        this.forms.component.next(this.nameformRep)
        this.dialog.open(FormrepuestosComponent);
        break;
      }
      case this.nameformInf:{

        this.forms.object=object;
        this.forms.component.next(this.nameformInf)
        this.dialog.open(ForminformesComponent);
        break;
      }
    }
  }

  

  

}

