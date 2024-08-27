import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicioEmpleadosService } from '../servicio-empleados.service';
import { Empleado } from '../empleado.model';
import { EmpleadosService } from '../empleados.service';

@Component({
  selector: 'app-actualiza-component',
  templateUrl: './actualiza-component.component.html',
  styleUrl: './actualiza-component.component.css'
})
export class ActualizaComponentComponent {

  constructor(private router:Router, private route:ActivatedRoute, private miServicio:ServicioEmpleadosService, private empleadosDatos:EmpleadosService){
    this.empleados=empleadosDatos.empleados;

  }

  VolverHome(){
    this.router.navigate([""]);
  }
  /*
  ActualizarEmpleado(){
    let nuevoEmpleado=new Empleado(this.nombres, this.apellidos, this.cargos, this.salarios);
    //this.miServicio.muestraMensaje("Nombre del empleado: "+nuevoEmpleado.nombre);
    this.empleadosDatos.actualizarEmpleado(this.indice,nuevoEmpleado);
    this.router.navigate([""]);
  };

  EliminarEmpleado(){
    this.empleadosDatos.eliminarEmpleado(this.indice);
    this.router.navigate([""]);

  };*/

  accion:number;

  ActualizarEmpleado(){
    if(this.accion==1){
      let nuevoEmpleado=new Empleado(this.nombres, this.apellidos, this.cargos, this.salarios);
    //this.miServicio.muestraMensaje("Nombre del empleado: "+nuevoEmpleado.nombre);
    this.empleadosDatos.actualizarEmpleado(this.indice,nuevoEmpleado);
    this.router.navigate([""]);
    }else if(this.accion==2){
      this.empleadosDatos.eliminarEmpleado(this.indice);
    this.router.navigate([""]);
    }

  };


  nombres="";
  apellidos="";
  cargos="";
  salarios=0;
  indice:number;

  empleados:Empleado[]=[];

  ngOnInit(): void {

    this.accion = parseInt(this.route.snapshot.queryParams['accion']);

    this.empleados=this.empleadosDatos.empleados;
    this.indice=this.route.snapshot.params['id'];

    let empleado:Empleado = this.empleadosDatos.encontrarEmpleado(this.indice);

    this.nombres=empleado.nombre;
    this.apellidos=empleado.apellido;
    this.cargos=empleado.cargo;
    this.salarios=empleado.salario;

  }

}
