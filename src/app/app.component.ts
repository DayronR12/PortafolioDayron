import { Component, AfterViewInit, ViewEncapsulation, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from './app.service';

declare var particlesJS: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'my-portafolio';
  items: any[] = [];
  activeItem: any | undefined;
  isMenuOpen = false; // Estado del menú hamburguesa
  isLargeScreen: boolean = window.innerWidth > 768; // Detección de pantalla
  showHamburgerMenu = false; // Estado del menú desplegable

  // Estado del tema
  isDarkTheme = false; // Inicializa con el tema claro por defecto

  constructor(private router: Router, private appService: AppService) {
    this.items = [
      { label: 'Inicio', icon: 'pi pi-home', routerLink: '/inicio' },
      { label: 'Habilidades', icon: 'pi pi-cog', routerLink: '/habilidades' },
      { label: 'Sobre Mí', icon: 'pi pi-user', routerLink: '/sobre-mi' },
      { label: 'Proyectos', icon: 'pi pi-briefcase', routerLink: '/proyectos' },
      { label: 'Contacto', icon: 'pi pi-phone', routerLink: '/contacto' }
    ];
    this.activeItem = this.items[0];
  }

  ngOnInit(): void {
    this.updateScreenSize();
  }

  ngAfterViewInit(): void {
    this.applyThemeClass(); // Aplicar tema al iniciar
    this.loadParticles(); // Cargar partículas
  }

  // Detección de cambios de tamaño de pantalla
  @HostListener('window:resize')
  updateScreenSize() {
    this.isLargeScreen = window.innerWidth > 768;
    if (this.isLargeScreen) {
      this.showHamburgerMenu = false; // Esconde el menú cuando cambia a pantalla grande
    }
  }

  // Alterna el menú hamburguesa
  toggleMenu(): void {
    this.showHamburgerMenu = !this.showHamburgerMenu; // Cambia el estado del menú desplegable
  }

  navigateTo(route: string): void {
    this.router.navigate([route]);
    this.showHamburgerMenu = false; // Cierra el menú después de la navegación
  }

  // Método para alternar el tema
  toggleTheme(): void {
    this.applyThemeClass(); // Cambiar la clase del body
    this.loadParticles(); // Recargar las partículas
  }

  // Método que aplica las clases de los temas
  applyThemeClass(): void {
    const body = document.body;
    if (this.isDarkTheme) {
      body.classList.add('dark-mode');
      body.classList.remove('light-mode');
    } else {
      body.classList.add('light-mode');
      body.classList.remove('dark-mode');
    }
  }

  loadParticles(): void {
    const particleColor = this.isDarkTheme ? '#ffffff' : '#808080';
    const lineColor = this.isDarkTheme ? '#ffffff' : '#5c5858';

    particlesJS('particles-js', {
      particles: {
        number: {
          value: 80,
          density: { enable: true, value_area: 800 }
        },
        color: { value: particleColor },
        shape: {
          type: 'circle',
          stroke: { width: 1, color: particleColor },
          polygon: { nb_sides: 5 },
          image: { src: 'img/github.svg', width: 100, height: 100 }
        },
        opacity: { value: 0.5, random: false },
        size: { value: 3, random: true },
        line_linked: {
          enable: true,
          distance: 150,
          color: lineColor,
          opacity: 0.4,
          width: 1
        },
        move: {
          enable: true,
          speed: 6,
          direction: 'none',
          random: false,
          straight: false,
          out_mode: 'out',
          bounce: false
        }
      },
      interactivity: {
        detect_on: 'canvas',
        events: {
          onhover: { enable: false, mode: 'repulse' },
          onclick: { enable: false, mode: 'repulse' },
          resize: true
        },
        modes: {
          grab: { distance: 400, line_linked: { opacity: 1 } },
          bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
          repulse: { distance: 200, duration: 0.4 },
          push: { particles_nb: 4 },
          remove: { particles_nb: 2 }
        }
      },
      retina_detect: true
    });
  }
}
