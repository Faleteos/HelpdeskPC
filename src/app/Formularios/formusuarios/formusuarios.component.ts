import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-formusuarios',
  templateUrl: './formusuarios.component.html',
  styleUrls: ['./formusuarios.component.css']
})
export class FormusuariosComponent {
  addressForm = this.fb.group({
     
    nameUser: [null, Validators.required],
    passwUser: [null, Validators.required],
    estatUser: [null, Validators.required]
  });



  constructor(private fb: FormBuilder) {}

  onSubmit(): void {
    Swal.fire(
      'Good job!',
      'You clicked the button!',
      'success'
    )
  }
}
