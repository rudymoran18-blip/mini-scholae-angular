import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponents } from './Components/home-components/home-components';
import { CursosComponents } from './Components/cursos-components/cursos-components';
import { DetalleCursoComponents } from './Components/detalle-curso-components/detalle-curso-components';
import { MisCursosComponents } from './Components/mis-cursos-components/mis-cursos-components';
import { NavbarComponents } from './Components/Shared/navbar-components/navbar-components';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponents },
  { path: 'cursos', component: CursosComponents },
  { path: 'detalle/:id', component: DetalleCursoComponents },
  { path: 'misCursos', component: MisCursosComponents },
  { path: '**',  redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRouting { }
