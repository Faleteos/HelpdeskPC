import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-formrservicios',
  templateUrl: './formrservicios.component.html',
  styleUrls: ['./formrservicios.component.css']
})
export class FormrserviciosComponent {
  addressForm = this.fb.group({
    
    nombreServicio: [null, Validators.required],
    valorServicio: [null, Validators.required],
    estadoServicio: [null, Validators.required],
  });

  hasUnitNumber = false;

  // estadoServicios = [
  //   {name: 'ACTIVO', abbreviation: 'AC'},
  //   {name: 'INACTIVO', abbreviation: 'IN'},
    
  // ];

  constructor(private fb: FormBuilder) {}

  onSubmit(): void {
    Swal.fire(
      'Good job!',
      'You clicked the button!',
      'success'
    )
  }
}
