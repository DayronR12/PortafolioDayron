import { Component, ViewEncapsulation } from '@angular/core';
import { TimelineModule } from 'primeng/timeline';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-sobre-mi',
  templateUrl: './sobre-mi.component.html',
  styleUrl: './sobre-mi.component.css',
  encapsulation: ViewEncapsulation.None  // Deshabilita el encapsulamiento
})
export class SobreMiComponent {
  events: any[] = [
    {
      status: 'Quién soy',
      date: '2024-11-12',
      description: 'Soy estudiante de Ingeniería Informática con una gran pasión por el desarrollo web. Me especializo en el desarrollo Fullstack, creando soluciones completas tanto en el frontend como en el backend, y siempre buscando innovar en la creación de aplicaciones eficientes y escalables.',
      icon: 'pi pi-user',
      color: '#FF5722'  // Color para el marcador
    },
    {
      status: 'Experiencia',
      date: '2024-11-01',
      description: 'He trabajado y participado en varios proyectos de desarrollo web. Fui parte de un semillero de desarrollo de software enfocado en desarrollo Fullstack durante 10 meses.',
      icon: 'pi pi-briefcase',
      color: '#4CAF50'  // Color para el marcador
    },
    {
      status: 'Intereses',
      date: '2024-11-10',
      description: 'Me encanta explorar nuevas tecnologías, estar al tanto de las últimas tendencias en desarrollo y aprender sobre nuevos marcos y herramientas.',
      icon: 'pi pi-heart',
      color: '#2196F3'  // Color para el marcador
    },
    {
      status: 'Formación',
      date: '2024-10-01',
      description: 'Actualmente estudio Ingeniería Informática en el Politécnico Colombiano Jaime Isaza Cadavid. Estoy en mi tercer semestre de estudios.',
      icon: 'pi pi-graduation-cap',
      color: '#FFC107'  // Color para el marcador
    }
  ];
}
