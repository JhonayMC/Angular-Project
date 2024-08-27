import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-error-personalizado',
  templateUrl: './error-personalizado.component.html',
  styleUrl: './error-personalizado.component.css'
})
export class ErrorPersonalizadoComponent {

  constructor(private router:Router, private route:ActivatedRoute){}

  VolverAHome() {
    this.router.navigate([""]);
  }

}
