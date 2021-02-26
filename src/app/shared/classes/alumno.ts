import { Responsable } from './responsable';
import { Profesor } from "./profesor";

export class Alumno {
  public id: String = '';
  public dni: String = '';
  public nombre: String = '';
  public fechaNacimiento: String = '';
  public telefono: String = '';
  public direccion: String = '';
  public tutor: Profesor = new Profesor();
  public responsable: Responsable = new Responsable;

}
