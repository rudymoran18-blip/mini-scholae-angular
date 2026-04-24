import { Component } from '@angular/core';
import { Cursos } from '../../interfaces/cursos.interfaces';
import { InscripcionesService } from '../../Services/inscripciones.service';

@Component({
  selector: 'app-mis-cursos-components',
  standalone: false,
  templateUrl: './mis-cursos-components.html',
  styleUrl: './mis-cursos-components.css',
})
export class MisCursosComponents {
  constructor(private inscripcionesService: InscripcionesService) {}

  get cursosInscritos(): Cursos[] {
    return this.inscripcionesService.obtenerCursosInscritos();
  }

  get cantidadInscripciones(): number {
    return this.inscripcionesService.getCantidadInscripciones();
  }

  cancelar(index: number): void {
    this.inscripcionesService.cancelarInscripcion(index);
  }
}
