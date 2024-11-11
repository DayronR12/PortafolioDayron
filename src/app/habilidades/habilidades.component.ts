import { Component } from '@angular/core';
import AOS from 'aos';
import 'aos/dist/aos.css';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent {
  bigRadius: number = 250; // Tamaño del círculo grande
  smallRadius: number = 100; // Tamaño del círculo pequeño

  ngOnInit() {
    AOS.init();
  }
}
