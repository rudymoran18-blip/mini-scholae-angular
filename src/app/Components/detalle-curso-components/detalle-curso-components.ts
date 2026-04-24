import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CursosService } from '../../Services/cursos.service';
import { Cursos } from '../../interfaces/cursos.interfaces';

@Component({
  selector: 'app-detalle-curso-components',
  standalone: false,
  templateUrl: './detalle-curso-components.html',
  styleUrl: './detalle-curso-components.css',
})
export class DetalleCursoComponents implements OnInit {
  curso?: Cursos;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private cursosService: CursosService
  ) {}

  ngOnInit(): void {
    const id = Number(this.activatedRoute.snapshot.paramMap.get('id'));

    this.curso = this.cursosService.obtenerIdCurso(id);

    if (!this.curso) {
      this.router.navigate(['/cursos']);
    }
  }

  regresar(): void {
    this.router.navigate(['/cursos']);
  }
}
