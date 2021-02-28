import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Alumno } from '../classes/alumno';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}

@Injectable({
  providedIn: 'root'
})
export class ListadoService {

  url='https://localhost.com:8080';

  constructor(private http: HttpClient) {
    console.log('ListadoService inicializado...');
   }

   public alumno: Alumno = new Alumno();

   sendAlumno(alumno: Alumno) {
    this.alumno = alumno;
  }

  getAlumno() {
    return this.alumno;
  }

  resetAlumno() {
    this.alumno = new Alumno;
  }

   getAlumnos() {
    const url = `${this.url}/alumnos`
     return this.http.get<Observable<Alumno[]>>(url)
     .pipe(catchError(this.handleError('get', [])));
   }

   getAlumnoByID(id: String): Observable<Alumno> {
     const url = `${this.url}/alumno/${id}`;
     return this.http.get<Alumno>(url)
     .pipe(catchError(this.handleError('get', [])));
   }

   addAlumno(alumno: Alumno): Observable<Alumno> {
    const url = `${this.url}/alumno`;
     return this.http.post<Alumno>(url, alumno, httpOptions)
      .pipe(catchError(this.handleError('add', [])));
   }

   updateAlumno(id: String): Observable<any> {
    const url = `${this.url}/alumno/${id}`;
    return this.http.put(url, id, httpOptions)
    .pipe(catchError(this.handleError('update', [])));
   }

   deleteAlumno(id: String): Observable<Alumno> {
    const url = `${this.url}/alumno/${id}`;
    return this.http.delete<Alumno>(url, httpOptions)
    .pipe(catchError(this.handleError('delete', [])));
   }

   private handleError(operation = 'operation', result?: any) {
     return (error: any): any[] => {
       console.error(error);
       console.log(`${operation} failed: ${error.message}`);
       return [];
     }
   }

}
