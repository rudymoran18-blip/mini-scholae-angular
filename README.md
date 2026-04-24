# MiniScholae Angular

MiniScholae es una aplicación web tipo SPA desarrollada en Angular para simular un sistema de asignación de cursos. Permite visualizar cursos disponibles, consultar detalles, inscribirse, validar cupos y administrar los cursos asignados.

## Demo

https://mini-scholae-courses.netlify.app/ 

## Funcionalidades

- Listado de cursos disponibles
- Vista de detalle por curso
- Validación de cupos disponibles
- Prevención de inscripciones duplicadas
- Vista de cursos asignados
- Cancelación de inscripción
- Feedback visual al usuario
- Navegación SPA con Angular Router
- Uso de servicios para manejar el estado de inscripción

## Tecnologías utilizadas

- Angular
- TypeScript
- Bootstrap
- Font Awesome
- GitHub
- Netlify

## Decisiones técnicas

- Se utilizó Angular Router para la navegación entre vistas.
- Se implementó un servicio para manejar las inscripciones.
- Se validó que un curso lleno no permita nuevas inscripciones.
- Se evitó la duplicación de cursos inscritos.
- Se usaron assets locales para representar visualmente cada curso.
- Se configuró la aplicación como SPA para despliegue estático en Netlify.

## Instalación local

```bash
npm install
npm start
