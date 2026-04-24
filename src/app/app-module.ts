import { NgModule, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import {AppRouting} from './app.routes'

import { App } from './app';
import { NavbarComponents } from './Components/Shared/navbar-components/navbar-components';
import { HomeComponents } from './Components/home-components/home-components';
import { DetalleCursoComponents } from './Components/detalle-curso-components/detalle-curso-components';
import { MisCursosComponents } from './Components/mis-cursos-components/mis-cursos-components';
import { CursosComponents } from './Components/cursos-components/cursos-components';


@NgModule({
  declarations: [
    App,
    NavbarComponents,
    HomeComponents,
    DetalleCursoComponents,
    MisCursosComponents,
    CursosComponents

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppRouting
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [App]
})
export class AppModule { }
