import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { InicioComponent } from './inicio/inicio.component';
import { SobreMiComponent } from './sobre-mi/sobre-mi.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { HabilidadesComponent } from './habilidades/habilidades.component';
import { ContactoComponent } from './contacto/contacto.component';
import { TabMenuModule } from 'primeng/tabmenu'; // Importa TabMenuModule de PrimeNG
import { RippleModule } from 'primeng/ripple';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';



@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    SobreMiComponent,
    ProyectosComponent,
    HabilidadesComponent,
    ContactoComponent,

  ],
  imports: [
    BrowserModule,
    TabMenuModule,
    AppRoutingModule,
    RippleModule,
    DropdownModule,
    FormsModule,
    BrowserAnimationsModule,
    ToggleButtonModule,
    CardModule,
    ButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
