import { Component,OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from 'src/app/Services/api.service';
import { LoginService } from 'src/app/Services/login.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  constructor(public loginservice:LoginService,private api:ApiService) {
  }

  em = "";
  pass = "";

  public setSession:any;

  loginForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });

  ngOnInit(): void {
      this.validarSesion();
  }

 async onSubmit(){
    this.em = this.loginForm.controls["username"].value;
    this.pass = this.loginForm.controls["password"].value;

    let Cadena=this.em+" "+this.pass;

    console.log(Cadena);

    this.api.getIdLogin('Usuarios',Cadena).subscribe((resp:any)=>{
        if(resp.length!=0){
          Swal.fire(
            'Muy Bien!!',
            'Se a logueado con exito',
            'success'
        )
       localStorage.setItem('login', 'login');
       location.href='/';
        }else{
          Swal.fire(
            'Muy Mal!!',
            'No se a logueado con exito',
            'error'
        )
        }
    })




  // }   else{
  //   Swal.fire({
  //       icon: 'error',
  //       title: 'Ooops...',
  //       text: 'Datos de logueo erroneos',
  //       footer: 'Intente con: usuario: usuario y contraseña: 1234 '
  //   })
  //   localStorage.setItem('login', 'logout');
  //   this.loginservice.login.next("login");  
  // }
 }

 public validarSesion(){
     return localStorage.getItem('login');
 }
}
