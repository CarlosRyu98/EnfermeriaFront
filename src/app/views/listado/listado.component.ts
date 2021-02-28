import { ListadoService } from './../../shared/services/listado.service';
import { Component, OnInit } from '@angular/core';
import { Alumno } from 'src/app/shared/classes/alumno';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  public alumno: Alumno = new Alumno();
  public alumnos: Alumno[] = [];

  constructor(private listadoService: ListadoService) {
    this.getAll();
   }

   getAll(): void {
     this.listadoService.getAlumnos()
     .subscribe(alumnos => this.alumnos = alumnos.content);
   }

   delete(alumno: Alumno): void {
     this.alumnos=this.alumnos.filter(p=>p!==alumno);
     this.listadoService.deleteAlumno(alumno.id).subscribe();
    }

    update(alumno: Alumno): void {
      this.listadoService.sendAlumno(alumno);
    }

  ngOnInit() {
  }

}
