import { Component } from '@angular/core';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrl: './proyectos.component.css'
})
export class ProyectosComponent {
  goToGitHub() {
    window.open('https://github.com/AndresVilladaPoli/FUNFLEX', '_blank');
  }
  goToGitHubb() {
    window.open('https://github.com/AndresVilladaPoli/CRM_Entertainment', '_blank');
  }
  goToGitHubCRUD() {
    window.open('https://github.com/DayronR12/Pruebas-Pagina-', '_blank');
  }
  goToGitHubCRUDVET(){
    window.open('https://github.com/DayronR12/VeterinariaXYZ', '_blank');
  }
}
