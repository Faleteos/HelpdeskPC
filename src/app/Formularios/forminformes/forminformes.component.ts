import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FormsService } from 'src/app/Services/forms.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-forminformes',
  templateUrl: './forminformes.component.html',
  styleUrls: ['./forminformes.component.css'],
})
export class ForminformesComponent implements OnInit {

  nameforminf: any = 'Informes';

  InForm = this.fb.group({
    tipoInforme: [null, Validators.required],
    // fechaInforme: [null, Validators.required],
    descInforme: [null, Validators.required],
    estadoInforme: [null, Validators.required],
  });

  hasUnitNumber = false;

  tipoInformes = [
    { name: 'Servicio tecnico', abbreviation: 'ST' },
    { name: 'Mantenimiento', abbreviation: 'MN' },
    { name: 'Revision PC', abbreviation: 'RP' },
    { name: 'Cambio Repuesto', abbreviation: 'CR' },
    { name: 'Garantia', abbreviation: 'GA' },
  ];

  estadoInformes = [
    { name: 'CERRADO', abbreviation: 'CE' },
    { name: 'ABIERTO', abbreviation: 'AB' },
  ];

  constructor(private fb: FormBuilder, public forms: FormsService) {}

  ngOnInit(): void {
   
    this.forms.objexample.subscribe((resp: any) => {
      this.InForm.patchValue(resp);
    })

    this.forms.component.subscribe((res) => {
      console.log(res);
      if (res === this.nameforminf) {
        console.log(res);
      }
    });
  }

  onSubmit(): void {
    Swal.fire('Good job!', 'You clicked the button!', 'success');
  }
}
