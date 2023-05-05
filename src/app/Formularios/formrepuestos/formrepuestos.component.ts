import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-formrepuestos',
  templateUrl: './formrepuestos.component.html',
  styleUrls: ['./formrepuestos.component.css']
})
export class FormrepuestosComponent {
  addressForm = this.fb.group({

    tipoRep: [null, Validators.required],
    marcaRep: [null, Validators.required],
    capRep: [null, Validators.required],
    valorRep: [null, Validators.required],
    stockRep: [null, Validators.required]
   
  });

  hasUnitNumber = false;

  tipoReps = [
    {name: 'Disco Duro', abbreviation: 'DD'},
    {name: 'Disco Solido', abbreviation: 'DS'},
    {name: 'Memoria RAM DDR2', abbreviation: 'M2'},
    {name: 'Memoria RAM DDR3', abbreviation: 'M3'},
    {name: 'Memoria RAM DDR4', abbreviation: 'M4'},
    {name: 'Fuente de poder generica', abbreviation: 'FG'},
    {name: 'Fuente de poder real', abbreviation: 'FR'}

  ];

  marcaReps = [
    {name: 'CRUCIAL', abbreviation: 'CR'},
    {name: 'SAMSUNG', abbreviation: 'SM'},
    {name: 'TOSHIBA', abbreviation: 'TS'},
    {name: 'TERMALTAKE', abbreviation: 'TK'},
    {name: 'HP', abbreviation: 'HP'},
    {name: 'LENOVO', abbreviation: 'LN'},
    {name: 'ACER', abbreviation: 'AC'},
    {name: 'GENERICA', abbreviation: 'GN'}

  ];

  capReps = [
    {name: '8GB', abbreviation: '08'},
    {name: '16GB', abbreviation: '16'},
    {name: '32GB', abbreviation: '32'},
    {name: '120GB', abbreviation: '120'},
    {name: '240GB', abbreviation: '240'},
    {name: '480GB', abbreviation: '480'},
    {name: '500GB', abbreviation: '500'},
    {name: '1TB', abbreviation: '1T'},
    {name: '2TB', abbreviation: '2T'},
    {name: '4TB', abbreviation: '4T'},
    {name: '8TB', abbreviation: '8T'},
    {name: '10TB', abbreviation: '10T'},
    {name: '20TB', abbreviation: '20T'}

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
