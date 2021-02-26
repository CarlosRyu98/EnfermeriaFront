import { Alumno } from 'src/app/shared/classes/alumno';
import { ListadoService } from './../../shared/services/listado.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ficha-alumno',
  templateUrl: './ficha-alumno.component.html',
  styleUrls: ['./ficha-alumno.component.css']
})
export class FichaAlumnoComponent implements OnInit {

  public alumno: Alumno = new Alumno();
  alumno_id: String;

  constructor(private actRoute: ActivatedRoute, private alumnoService: ListadoService) {
    this.alumno_id = this.actRoute.snapshot.params.id;
    this.getAlumnoById(this.alumno_id);
   }

  ngOnInit(): void {
  }

  getAlumnoById(id: String): void {
    this.alumnoService.getAlumnoByID(id)
    .subscribe(alumno => this.alumno = alumno);
  }

}
