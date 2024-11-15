import { Component, AfterViewInit } from '@angular/core';
import AOS from 'aos';
import 'aos/dist/aos.css';

@Component({
  selector: 'app-sobre-mi',
  templateUrl: './sobre-mi.component.html',
  styleUrls: ['./sobre-mi.component.css']
})
export class SobreMiComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    setTimeout(() => {
      // Inicializa AOS después de un breve retraso
      AOS.init({
        offset: 100, // Ajusta la activación de las animaciones
        duration: 1000,
        once: true
      });
    }, 100);
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
