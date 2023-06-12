import { Component,OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoginService } from 'src/app/Services/login.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  constructor(public loginservice:LoginService) {
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
    if(this.em==="usuario" && this.pass==="1234"){
    Swal.fire(
        'Muy Bien!!',
        'Se a logueado con exito',
        'success'
    )
   localStorage.setItem('login', 'login');
   location.href='/';

  // this.loginservice.login.next("login");
}


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
