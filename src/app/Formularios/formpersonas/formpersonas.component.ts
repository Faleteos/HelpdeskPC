import { Component, OnInit } from '@angular/core';
import { EmailValidator, FormBuilder, FormControl, PatternValidator, Validators } from '@angular/forms';
import { FormsService } from 'src/app/Services/forms.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-formpersonas',
  templateUrl: './formpersonas.component.html',
  styleUrls: ['./formpersonas.component.css']
})
export class FormpersonasComponent implements OnInit {

  nameformPer : any = "Personas";

  perForm = this.fb.group({

    tipoDoc:      [null, Validators.required],
    numDoc:       [null, Validators.required],
    pNombre:      [null, Validators.required],
    sNombre:      [null, Validators.required],
    pApellido:    [null, Validators.required],
    sApellido:    [null, Validators.required],
    numCel:       [null, Validators.required],
    email:        [null, Validators.required],
    pais:         [null, Validators.required],
    departamento: [null, Validators.required],
    ciudad:       [null, Validators.required],
    barrio:       [null, Validators.required],
    direccion:    [null, Validators.required]
    

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
    {name: 'Soacha', abbreviation: 'CO'},
    {name: 'Ibague', abbreviation: 'MX'},
    {name: 'tunja', abbreviation: 'BR'}
  ];


  constructor(private fb: FormBuilder, public forms: FormsService) {}


  ngOnInit(): void {


  // console.log(this.tipoDocs[0].abbreviation);
  // console.log(this.paises[0].name);

  this.forms.objexample.subscribe((resp:any)=>{
      this.perForm.patchValue(resp);
  })


    this.forms.component.subscribe((res)=>{
         console.log(res)
      if(res===this.nameformPer){
        // this.perForm.setControl['tipoDoc'].value(this.forms.object.tipoDoc)
        // this.perForm.setControl("numDoc", new FormControl(this.forms.object.numDoc))
        // this.perForm.setControl("primerNombre", new FormControl(this.forms.object.pNombre))
        // this.perForm.setControl("segundNombre", new FormControl(this.forms.object.sNombre))
        // this.perForm.setControl("primerApellido", new FormControl(this.forms.object.pApellido))
        // this.perForm.setControl("segundoApellido", new FormControl(this.forms.object.sApellido))
        // this.perForm.setControl("numCel", new FormControl(this.forms.object.numCel))
        // this.perForm.setControl("email", new FormControl(this.forms.object.email))
        // this.perForm.setControl("pais", new FormControl(this.forms.object.pais))
        // this.perForm.setControl("departamento", new FormControl(this.forms.object.departamento))
        // this.perForm.setControl("ciudad", new FormControl(this.forms.object.ciudad))
        // this.perForm.setControl("barrio", new FormControl(this.forms.object.barrio))
        // this.perForm.setControl("direccion", new FormControl(this.forms.object.direccion))

        console.log(res);

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
