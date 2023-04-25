import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { RegistropersonaComponent } from './Components/registropersona/registropersona.component';
import { TicketsComponent } from './Components/tickets/tickets.component';
import { PersonasComponent } from './Components/personas/personas.component';
import { RepuestosComponent } from './Components/repuestos/repuestos.component';
import { ServiciosComponent } from './Components/servicios/servicios.component';
import { InformesComponent } from './Components/informes/informes.component';
import { UsuariosComponent } from './Components/usuarios/usuarios.component';

const routes: Routes = [
  {
    path: 'registropersona', component:RegistropersonaComponent
  },
  {
    path: 'tickets', component:TicketsComponent
  },
  {
    path: 'login', component:LoginComponent
  },
  {
    path: 'personas', component:PersonasComponent
  },
  {
    path: 'repuestos', component:RepuestosComponent
  },
  {
    path: 'servicios', component:ServiciosComponent
  },
  {
    path: 'informes', component:InformesComponent
  },
  {
    path: 'usuarios', component:UsuariosComponent
  }

  
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
