import { Component, OnInit } from '@angular/core';
import { Alumno } from 'src/app/shared/classes/alumno';
import { ListadoService } from 'src/app/shared/services/listado.service';

@Component({
  selector: 'app-anadir-alumno',
  templateUrl: './anadir-alumno.component.html',
  styleUrls: ['./anadir-alumno.component.css']
})
export class AnadirAlumnoComponent implements OnInit {

  public alumno: Alumno = new Alumno();
  public alumnos: Alumno[] = [];

  constructor(private listadoService: ListadoService) {
   }

  add(): void {
    this.listadoService.addAlumno(this.alumno)
    .subscribe(alumno => {
      this.alumnos.push(alumno);
    });
  }

  update(): void {
    this.listadoService.updateAlumno(this.alumno.id)
    .subscribe(alumno => {
      for(var i = 0; i < this.alumnos.length; i++) {
        if(this.alumnos[i].nombre===alumno.nombre) {
          this.alumnos.splice(i, 1);
          this.alumnos.push(alumno[i]);
        }
      }
    });
  }

  ngOnInit(): void {
  }

}
