import { Component, OnInit } from '@angular/core';
import { CursosService } from '../../Services/cursos.service';
import { Router } from '@angular/router';
import { InscripcionesService } from '../../Services/inscripciones.service';
import { Cursos } from '../../interfaces/cursos.interfaces';

@Component({
  selector: 'app-cursos-components',
  standalone: false,
  templateUrl: './cursos-components.html',
  styleUrl: './cursos-components.css',
})
export class CursosComponents implements OnInit {
  lstCursos: Cursos[] = [];
  mensaje: string = '';
  tipoMensaje: 'success' | 'warning' | 'danger' = 'success';

  constructor(
    private cursosService: CursosService,
    private router: Router,
    private inscripcionesService: InscripcionesService
  ) {}

  ngOnInit(): void {
    this.lstCursos = this.cursosService.getCursos();
  }

  inscribirse(curso: Cursos): void {
    if (this.estaInscrito(curso.id)) {
      this.mostrarMensaje('Ya estás inscrito en este curso.', 'warning');
      return;
    }

    if (this.cursoLleno(curso)) {
      this.mostrarMensaje('Este curso ya no tiene cupos disponibles.', 'danger');
      return;
    }

    this.inscripcionesService.inscribirse(curso);
    curso.inscritos++;

    this.mostrarMensaje(`Inscripción exitosa en ${curso.nombre}.`, 'success');
  }

  verDetalleCurso(id: number): void {
    this.router.navigate(['/detalle', id]);
  }

  estaInscrito(id: number): boolean {
    return this.inscripcionesService
      .obtenerCursosInscritos()
      .some((curso) => curso.id === id);
  }

  cursoLleno(curso: Cursos): boolean {
    return curso.inscritos >= curso.cupo;
  }

  cuposDisponibles(curso: Cursos): number {
    return curso.cupo - curso.inscritos;
  }

  cerrarMensaje(): void {
    this.mensaje = '';
  }

  private mostrarMensaje(
    mensaje: string,
    tipo: 'success' | 'warning' | 'danger'
  ): void {
    this.mensaje = mensaje;
    this.tipoMensaje = tipo;

    setTimeout(() => {
      this.mensaje = '';
    }, 3000);
  }
}
