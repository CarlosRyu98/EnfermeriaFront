import { AnadirActuacionComponent } from './views/anadir-actuacion/anadir-actuacion.component';
import { AnadirIncidenciaComponent } from './views/anadir-incidencia/anadir-incidencia.component';
import { AnadirAlumnoComponent } from './views/anadir-alumno/anadir-alumno.component';
import { ResumenComponent } from './views/resumen/resumen.component';
import { ListadoComponent } from './views/listado/listado.component';
import { LoginComponent } from './views/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FichaAlumnoComponent } from './views/ficha-alumno/ficha-alumno.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'listado', component: ListadoComponent },
  { path: 'resumen', component: ResumenComponent },
  { path: 'anadiralumno', component: AnadirAlumnoComponent },
  { path: 'anadirincidencia', component: AnadirIncidenciaComponent },
  { path: 'anadiractuacion', component: AnadirActuacionComponent },
  { path: 'alumno/:id', component: FichaAlumnoComponent},

  { path: '', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
