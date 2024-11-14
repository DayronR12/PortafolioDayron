import { Component, ViewEncapsulation } from '@angular/core';
import AOS from 'aos';
import 'aos/dist/aos.css';

@Component({
  selector: 'app-sobre-mi',
  templateUrl: './sobre-mi.component.html',
  styleUrl: './sobre-mi.component.css',
  encapsulation: ViewEncapsulation.None  // Deshabilita el encapsulamiento
})
export class SobreMiComponent {
  ngOnInit() {
    AOS.init();
  }
}
