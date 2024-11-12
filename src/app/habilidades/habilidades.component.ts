import { ChangeDetectorRef, Component, OnInit, AfterViewInit } from '@angular/core';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { GeneralesService } from '../servicios/generales.service';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent implements OnInit, AfterViewInit {
  bigRadius: number = 250;
  smallRadius: number = 100;

  frontend: any[] = [];
  backend: any[] = [];
  databases: any[] = [];
  otros: any[] = [];

  constructor(
    private generalesService: GeneralesService,
    private changeDetector: ChangeDetectorRef
  ) {}

  ngOnInit() {
    AOS.init();

    this.generalesService.getGeneralesData().subscribe(data => {
      this.frontend = data.frontend;
      this.backend = data.backend;
      this.databases = data.databases;
      this.otros = data.otros;
      this.changeDetector.detectChanges(); // Forzar actualización
    });
  }

  ngAfterViewInit() {
    // Agrega un pequeño retraso para asegurar que se detecten bien las animaciones
    setTimeout(() => {
      AOS.refresh();
    }, 500);
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
