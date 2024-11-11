import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module'; // Importa AppModule
import AOS from 'aos';
import 'aos/dist/aos.css';

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
