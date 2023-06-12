import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { FormsService } from 'src/app/Services/forms.service';
import Swal from 'sweetalert2';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';

@Component({
  selector: 'app-formrservicios',
  templateUrl: './formrservicios.component.html',
  styleUrls: ['./formrservicios.component.css'],
  // selector: 'slide-toggle-overview-example',
  // templateUrl: 'slide-toggle-overview-example.html',
  //standalone: true,
  //imports: [MatSlideToggleModule]
})


export class FormrserviciosComponent implements OnInit {

  nameformServ : any = "Servicios";

  servicioForm = this.fb.group({
    
    nombreServicio: [null, Validators.required],
    valorServicio:  [null, Validators.required],
    estadoServicio: [null, Validators.required],
    

    
    
  });

  hasUnitNumber = false;

  // estadoServicios = [
  //   {name: 'ACTIVO', abbreviation: 'AC'},
  //   {name: 'INACTIVO', abbreviation: 'IN'},
    
  // ];

  constructor(private fb: FormBuilder, public forms: FormsService) {}

  ngOnInit(): void {
    this.forms.component.subscribe((res)=>{
      if(res===this.nameformServ){

        this.servicioForm.setControl("nombreServicio", new FormControl(this.forms.object.nombServ))
        this.servicioForm.setControl("valorServicio", new FormControl(this.forms.object.valorServicio))
        this.servicioForm.setControl("estadoServicio", new FormControl(this.forms.object.estadoServicio))
        
      }
    })
  }

  onSubmit(): void {
    Swal.fire(
      'Good job!',
      'You clicked the button!',
      'success'
    )
  }
}
