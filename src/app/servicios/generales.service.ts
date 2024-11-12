import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GeneralesService {
  constructor() {}

  getGeneralesData(): Observable<any> {
    const datosGenerales = {
      frontend: [
        { nombre: 'Angular', icono: 'assets/images/icons8-angular-48.png' },
        { nombre: 'React', icono: 'assets/images/icons8-reaccionar-80.png' },
        { nombre: 'JavaScript', icono: 'assets/images/icons8-javascript-48.png' },
        { nombre: 'HTML', icono: 'assets/images/icons8-html-48.png' },
        { nombre: 'CSS', icono: 'assets/images/icons8-css-50 (1).png' },
        { nombre: 'TypeScript', icono: 'assets/images/icons8-typescript-24.png' },
        { nombre: 'Bootstrap', icono: 'assets/images/icons8-oreja-48.png' }
      ],
      backend: [
        { nombre: 'Node.js', icono: 'assets/images/icons8-nodo-js-48.png' },
        { nombre: 'Spring Boot', icono: 'assets/images/icons8-logotipo-de-primavera-48.png' },
        { nombre: 'Maven', icono: 'assets/images/icons8-maven-ios-50.png' },
        { nombre: 'IntelliJ IDEA', icono: 'assets/images/icons8-intellij-idea-48.png' }
      ],
      databases: [
        { nombre: 'MySQL', icono: 'assets/images/icons8-mysql-48.png' },
        { nombre: 'MongoDB', icono: 'assets/images/icons8-mongo-db-48.png' },
        { nombre: 'PostgreSQL', icono: 'assets/images/postt.png' }
      ],
      otros: [
        { nombre: 'Git', icono: 'assets/images/icons8-git-48.png' },
        { nombre: 'JIRA', icono: 'assets/images/icons8-existir-48.png' },
        { nombre: 'Apache', icono: 'assets/images/apache.png' },
        { nombre: 'REDUX', icono: 'assets/images/redux-reducer.png' },
        { nombre: 'XAMPP', icono: 'assets/images/xamp.png' },
        { nombre: 'Postman', icono: 'assets/images/post.png' }
      ]
    };
    return of(datosGenerales);
  }
}
