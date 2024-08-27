import { Component } from '@angular/core';
import { Empleado } from '../empleado.model';
import { ServicioEmpleadosService } from '../servicio-empleados.service';
import { EmpleadosService } from '../empleados.service';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrl: './home-component.component.css'
})
export class HomeComponentComponent {

  nombres="";
  apellidos="";
  cargos="";
  salarios=0;

  constructor(private miServicio:ServicioEmpleadosService, private empleadosDatos:EmpleadosService){
    this.empleados=empleadosDatos.empleados;
  }
  ngOnInit(): void {
    //this.empleados=this.empleadosDatos.empleados;

    this.empleadosDatos.obtenerEmpleados().subscribe(misEmpleados=>{
      console.log(misEmpleados);
    this.empleados = Object.values(misEmpleados);
    
    this.empleadosDatos.setEmpleados(this.empleados);

    });
  }

  empleados:Empleado[]=[];

  RegistrarEmpleado(){
    let nuevoEmpleado=new Empleado(this.nombres, this.apellidos, this.cargos, this.salarios);
    //this.miServicio.muestraMensaje("Nombre del empleado: "+nuevoEmpleado.nombre);
    this.empleadosDatos.agregarEmpleadoServicio(nuevoEmpleado);
  };

}
