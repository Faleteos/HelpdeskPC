import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { RegistropersonaComponent } from './Components/registropersona/registropersona.component';
import { TicketsComponent } from './Components/tickets/tickets.component';
import { PersonasComponent } from './Components/personas/personas.component';

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
  }
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
