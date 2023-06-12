import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { HelpmenuComponent } from './Components/helpmenu/helpmenu.component';
import { RegistropersonaComponent } from './Components/registropersona/registropersona.component';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { TicketsComponent } from './Components/tickets/tickets.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { LoginComponent } from './Components/login/login.component';
// Import your AvatarModule
import { AvatarModule } from 'ngx-avatar';
import { PersonasComponent } from './Components/personas/personas.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { RepuestosComponent } from './Components/repuestos/repuestos.component';
import { ServiciosComponent } from './Components/servicios/servicios.component';
import { InformesComponent } from './Components/informes/informes.component';
import { UsuariosComponent } from './Components/usuarios/usuarios.component';
import { TableTemplateComponent } from './Components/table-template/table-template.component';
import { ForminformesComponent } from './Formularios/forminformes/forminformes.component';
import { FormpersonasComponent } from './Formularios/formpersonas/formpersonas.component';
import { FormusuariosComponent } from './Formularios/formusuarios/formusuarios.component';
import { FormrepuestosComponent } from './Formularios/formrepuestos/formrepuestos.component';
import { FormrserviciosComponent } from './Formularios/formrservicios/formrservicios.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';



@NgModule({
  declarations: [
    AppComponent,
    HelpmenuComponent,
    RegistropersonaComponent,
    TicketsComponent,
    LoginComponent,
    PersonasComponent,
    RepuestosComponent,
    ServiciosComponent,
    InformesComponent,
    UsuariosComponent,
    TableTemplateComponent,
    ForminformesComponent,
    FormpersonasComponent,
    FormusuariosComponent,
    FormrepuestosComponent,
    FormrserviciosComponent
  ],
  imports: [
  
    AvatarModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatDialogModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    ReactiveFormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    MatSlideToggleModule
  ],
  providers: [],
  bootstrap: [AppComponent],
// schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
