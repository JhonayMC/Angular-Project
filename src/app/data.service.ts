import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Empleado } from './empleado.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient:HttpClient) { }

  cargarEmpleados(){
    return this.httpClient.get("https://my-clients-21228-default-rtdb.firebaseio.com/datos.json");
  }

  guardarEmpleados(empleados: Empleado[]){
    this.httpClient.put("https://my-clients-21228-default-rtdb.firebaseio.com/datos.json",empleados).subscribe(
      respuesta=>{
        console.log("Respuesta, se ha creado un empleado", respuesta);
      },
      error=>{
        console.log("Error", error);
      }
    );
  }

  actualizarEmpleado(indice:number, empleado:Empleado){
    let url = "https://my-clients-21228-default-rtdb.firebaseio.com/datos/" + indice + ".json";
    this.httpClient.put(url,empleado).subscribe(
      respuesta=>{
        console.log("Respuesta, se ha actualizado un empleado", respuesta);
      },
      error=>{
        console.log("Error", error);
      }
    );
  }
  eliminarEmpleado(indice:number){
    let url = "https://my-clients-21228-default-rtdb.firebaseio.com/datos/" + indice + ".json";
    this.httpClient.delete(url).subscribe(
      respuesta=>{
        console.log("Respuesta, se ha eliminado un empleado", respuesta);
      },
      error=>{
        console.log("Error", error);
      }
    );
  }
}
