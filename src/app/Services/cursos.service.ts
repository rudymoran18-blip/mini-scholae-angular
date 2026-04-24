import { Injectable } from '@angular/core';
import { Cursos } from '../interfaces/cursos.interfaces';
import { Router } from '@angular/router';

@Injectable({providedIn: 'root'})
export class CursosService {

  private cursos:Cursos[] = [
  {
    id: 1,
    nombre: "Angular desde cero",
    nivel: "Básico",
    cupo: 20,
    inscritos: 5,
    descripcion: "Introducción a Angular y sus fundamentos",
    imagen: "assets/angular.png"
  },
  {
    id: 2,
    nombre: "Node.js para backend",
    nivel: "Intermedio",
    cupo: 15,
    inscritos: 15,
    descripcion: "Desarrollo de APIs REST con Node.js",
    imagen: "assets/nodejs.png"
  },
  {
    id: 3,
    nombre: "TypeScript avanzado",
    nivel: "Avanzado",
    cupo: 12,
    inscritos: 8,
    descripcion: "Tipos avanzados y patrones en TypeScript",
    imagen: "assets/ts.png"
  },
  {
    id: 4,
    nombre: "React para principiantes",
    nivel: "Básico",
    cupo: 25,
    inscritos: 18,
    descripcion: "Fundamentos de React y componentes",
    imagen: "assets/react.png"
  },
  {
    id: 5,
    nombre: "Docker y contenedores",
    nivel: "Intermedio",
    cupo: 18,
    inscritos: 12,
    descripcion: "Containerización de aplicaciones",
    imagen: "assets/docker.png"
  },
  {
    id: 6,
    nombre: "MongoDB esencial",
    nivel: "Básico",
    cupo: 20,
    inscritos: 20,
    descripcion: "Base de datos NoSQL con MongoDB",
    imagen: "assets/mongoDb.png"
  },
  {
    id: 7,
    nombre: "AWS Cloud Practitioner",
    nivel: "Intermedio",
    cupo: 10,
    inscritos: 7,
    descripcion: "Servicios cloud en Amazon Web Services",
    imagen: "assets/aws.png"
  },
  {
    id: 8,
    nombre: "Testing con Jest",
    nivel: "Intermedio",
    cupo: 15,
    inscritos: 3,
    descripcion: "Pruebas unitarias y de integración",
    imagen: "assets/jest.png"
  },
  {
    id: 9,
    nombre: "Vue.js 3 Composition API",
    nivel: "Avanzado",
    cupo: 12,
    inscritos: 12,
    descripcion: "Framework progresivo para interfaces",
    imagen: "assets/vue.png"
  },
  {
    id: 10,
    nombre: "Git y GitHub profesional",
    nivel: "Básico",
    cupo: 30,
    inscritos: 22,
    descripcion: "Control de versiones y colaboración",
    imagen: "assets/github.png"
  }
]

  constructor(private route:Router) { }


  getCursos(){
    return this.cursos;
  }

  getDetalleCurso(id:number){
    console.log(id);
    return this.cursos[id]
  }

  asignar(curso:Cursos){
    this.cursos.push(curso)
  }

  obtenerIdCurso(id:number){
    return this.cursos.find( c => c.id === id)
  }
}
