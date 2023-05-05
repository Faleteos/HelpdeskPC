import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { LoginComponent } from './Components/login/login.component';
import { RegistropersonaComponent } from './Components/registropersona/registropersona.component';
import { TicketsComponent } from './Components/tickets/tickets.component';
import { PersonasComponent } from './Components/personas/personas.component';
import { RepuestosComponent } from './Components/repuestos/repuestos.component';
import { ServiciosComponent } from './Components/servicios/servicios.component';
import { InformesComponent } from './Components/informes/informes.component';
import { UsuariosComponent } from './Components/usuarios/usuarios.component';
import { TableTemplateComponent } from './Components/table-template/table-template.component';
import { ForminformesComponent } from 'src/app/Formularios/forminformes/forminformes.component';


const routes: Routes = [
  { path: 'registropersona', component:RegistropersonaComponent },
  { path: 'tickets', component:TicketsComponent },
  // { path: 'login', component:LoginComponent },
  { path: 'personas', component:PersonasComponent },
  { path: 'repuestos', component:RepuestosComponent },
  { path: 'servicios', component:ServiciosComponent },
  { path: 'informes', component:InformesComponent },
  { path: 'usuarios', component:UsuariosComponent },
  { path: 'forminformes', component:ForminformesComponent },
  { path: 'TableTemplateComponent',component:TableTemplateComponent }
  
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
