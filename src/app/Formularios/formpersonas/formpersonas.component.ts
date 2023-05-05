import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-formpersonas',
  templateUrl: './formpersonas.component.html',
  styleUrls: ['./formpersonas.component.css']
})
export class FormpersonasComponent {
  addressForm = this.fb.group({

    tipoDoc: [null, Validators.required],
    numDoc: [null, Validators.required],
    primerNombre: [null, Validators.required],
    segundNombre: [null, Validators.required],
    primerApellido: [null, Validators.required],
    segundoApellido: [null, Validators.required],
    numCel: [null, Validators.required],
    email: [null, Validators.required],
    pais: [null, Validators.required],
    departamento: [null, Validators.required],
    ciudad: [null, Validators.required],
    barrio: [null, Validators.required],
    direccion: [null, Validators.required]

  });

  hasUnitNumber = false;

  tipoDocs = [
    {name: 'Cedula de ciudania', abbreviation: 'CC'},
    {name: 'Cedula de extrangeria', abbreviation: 'CE'},
    {name: 'Tarjeta de identidad', abbreviation: 'TI'}
  ];

  paises = [
    {name: 'Colombia', abbreviation: 'CO'},
    {name: 'Mexico', abbreviation: 'MX'},
    {name: 'Brasil', abbreviation: 'BR'}
  ];

  departamentos = [
    {name: 'Cundinamarca', abbreviation: 'CO'},
    {name: 'Tolima', abbreviation: 'MX'},
    {name: 'Boyaca', abbreviation: 'BR'}
  ];
  
  ciudades = [
    {name: 'Bogota', abbreviation: 'CO'},
    {name: 'Ibague', abbreviation: 'MX'},
    {name: 'tunja', abbreviation: 'BR'}
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
