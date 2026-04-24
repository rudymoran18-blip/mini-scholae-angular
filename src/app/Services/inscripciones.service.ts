import { Injectable } from '@angular/core';
import { Cursos } from '../interfaces/cursos.interfaces';

@Injectable({
  providedIn: 'root'
})
export class InscripcionesService {
  private cursosInscritos: Cursos[] = [];

  obtenerCursosInscritos(): Cursos[] {
    return [...this.cursosInscritos];
  }

  getCantidadInscripciones(): number {
    return this.cursosInscritos.length;
  }

  inscribirse(curso: Cursos): void {
    const yaInscrito = this.cursosInscritos.some(c => c.id === curso.id);

    if (!yaInscrito) {
      this.cursosInscritos.push(curso);
    }
  }

  cancelarInscripcion(index: number): void {
    if (index >= 0 && index < this.cursosInscritos.length) {
      this.cursosInscritos.splice(index, 1);
    }
  }
}
