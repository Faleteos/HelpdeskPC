import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-forminformes',
  templateUrl: './forminformes.component.html',
  styleUrls: ['./forminformes.component.css']
})
export class ForminformesComponent {
  addressForm = this.fb.group({

    tipoInforme: [null, Validators.required],
    // fechaInforme: [null, Validators.required],
    descInforme: [null, Validators.required],
    estadoInforme: [null, Validators.required]
  
  });

  hasUnitNumber = false;

  tipoInformes = [
    {name: 'Servicio tecnico', abbreviation: 'ST'},
    {name: 'Mantenimiento', abbreviation: 'MN'},
    {name: 'Revision PC', abbreviation: 'RP'},
    {name: 'Cambio Repuesto', abbreviation: 'CR'},
    {name: 'Garantia', abbreviation: 'GA'}
   
  ];

  estadoInformes = [
    {name: 'Alabama', abbreviation: 'AL'},
    {name: 'Alaska', abbreviation: 'AC'},
    {name: 'American Samoa', abbreviation: 'AB'}
   
  ];


  constructor(private fb: FormBuilder) {}

  onSubmit(): void {
    Swal.fire(
      'Good job!',
      'You clicked the button!',
      'success'
    )
  }
}
