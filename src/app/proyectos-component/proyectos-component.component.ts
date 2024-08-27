import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServicioEmpleadosService } from '../servicio-empleados.service';
import { Empleado } from '../empleado.model';
import { EmpleadosService } from '../empleados.service';

@Component({
  selector: 'app-proyectos-component',
  templateUrl: './proyectos-component.component.html',
  styleUrl: './proyectos-component.component.css'
})
export class ProyectosComponentComponent {

  constructor(private router:Router, private miServicio:ServicioEmpleadosService, private empleadosDatos:EmpleadosService){
    this.empleados=empleadosDatos.empleados;

  }

  VolverHome(){
    this.router.navigate([""]);
  }
  RegistrarEmpleado(){
    let nuevoEmpleado=new Empleado(this.nombres, this.apellidos, this.cargos, this.salarios);
    //this.miServicio.muestraMensaje("Nombre del empleado: "+nuevoEmpleado.nombre);
    this.empleadosDatos.agregarEmpleadoServicio(nuevoEmpleado);
    this.router.navigate([""]);
  };
  nombres="";
  apellidos="";
  cargos="";
  salarios=0;

  empleados:Empleado[]=[];

  ngOnInit(): void {
    this.empleados=this.empleadosDatos.empleados;
  }
}
