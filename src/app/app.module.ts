import { ListadoService } from './shared/services/listado.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { LoginComponent } from './views/login/login.component';
import { ListadoComponent } from './views/listado/listado.component';
import { ResumenComponent } from './views/resumen/resumen.component';
import { AnadirAlumnoComponent } from './views/anadir-alumno/anadir-alumno.component';
import { AnadirIncidenciaComponent } from './views/anadir-incidencia/anadir-incidencia.component';
import { AnadirActuacionComponent } from './views/anadir-actuacion/anadir-actuacion.component';
import { FormsModule } from '@angular/forms';
import { FichaAlumnoComponent } from './views/ficha-alumno/ficha-alumno.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    LoginComponent,
    ListadoComponent,
    ResumenComponent,
    AnadirAlumnoComponent,
    AnadirIncidenciaComponent,
    AnadirActuacionComponent,
    FichaAlumnoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    ListadoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
