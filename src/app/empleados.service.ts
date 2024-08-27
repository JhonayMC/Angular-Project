import { Injectable } from '@angular/core';
import { Empleado } from './empleado.model';
import { ServicioEmpleadosService } from './servicio-empleados.service';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {

  constructor(private ServicioVentanaAlerta:ServicioEmpleadosService, private dataService:DataService) { }

  setEmpleados(misEmpleados:Empleado[]){
      this.empleados=misEmpleados;
  }

  obtenerEmpleados(){
    return this.dataService.cargarEmpleados();
  
  }
  empleados:Empleado[]=[];
  /*
  empleados:Empleado[]=[

    new Empleado("Alexa","Lopez","Desarrollador",1000),
    new Empleado("Jose", "Perez", "Diseñador", 1500),
    new Empleado("Maria", "Gomez", "Analista", 2000),
    new Empleado("Pedro", "Rodriguez", "Gerente", 2500),
    new Empleado("Ana", "Martinez", "Contadora", 3000),

  ];*/

  agregarEmpleadoServicio(empleado:Empleado){
    this.ServicioVentanaAlerta.muestraMensaje("Persona agregada "+" \n"+
      empleado.nombre+"\n"+"Salario"+empleado.salario);
    this.empleados.push(empleado);

    this.dataService.guardarEmpleados(this.empleados);

  }

  agregarCaracteristicas(value:String){
    this.ServicioVentanaAlerta.muestraMensaje("Caracteristicas agregada "+value);
  }

  encontrarEmpleado(indice:number){
    let empleado:Empleado=this.empleados[indice];
    return empleado;
  }

  actualizarEmpleado(indice:number,empleado:Empleado){
    //this.empleados[indice]=empleado;
    let empleadoActualizado=this.empleados[indice];

    empleadoActualizado.nombre=empleado.nombre;
    empleadoActualizado.apellido=empleado.apellido;
    empleadoActualizado.cargo=empleado.cargo;
    empleadoActualizado.salario=empleado.salario;
    this.dataService.actualizarEmpleado(indice, empleado);
  }
  eliminarEmpleado(indice:number){
    this.empleados.splice(indice,1);
    this.dataService.eliminarEmpleado(indice);
    
    if(this.empleados!=null){
      this.dataService.guardarEmpleados(this.empleados);
    }
  }

}
