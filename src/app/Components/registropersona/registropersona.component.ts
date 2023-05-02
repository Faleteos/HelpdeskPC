import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-registropersona',
  templateUrl: './registropersona.component.html',
  styleUrls: ['./registropersona.component.css']
})
export class RegistropersonaComponent {
  addressForm = this.fb.group({
    company: null,
    firstName: [null, Validators.required],
    lastName: [null, Validators.required],
    address: [null, Validators.required],
    address2: null,
    city: [null, Validators.required],
    state: [null, Validators.required],
    postalCode: [null, Validators.compose([
      Validators.required, Validators.minLength(5), Validators.maxLength(5)])
    ],
    shipping: ['free', Validators.required]
  });

  hasUnitNumber = false;

  docs = [
    {name: 'Cedula de ciudania', abbreviation: 'CC'},
    {name: 'Cedula de extrangeria', abbreviation: 'CE'},
    {name: 'Tarjeta de identidad', abbreviation: 'TI'}
  ];

  constructor(private fb: FormBuilder) {}

  onSubmit(): void {
    alert('Thanks!');
  }
}
