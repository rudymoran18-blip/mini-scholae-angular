import { Component } from '@angular/core';
import { InscripcionesService } from '../../../Services/inscripciones.service';

@Component({
  selector: 'app-navbar-components',
  standalone: false,
  templateUrl: './navbar-components.html',
  styleUrl: './navbar-components.css',
})
export class NavbarComponents {
  constructor(private inscripcionesService: InscripcionesService) {}

  get cantidadCursos(): number {
    return this.inscripcionesService.getCantidadInscripciones();
  }
}
