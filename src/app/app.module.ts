import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ResumenComponent } from './pages/resumen/resumen.component';
import { PortafolioComponent } from './pages/portafolio/portafolio.component';
import { ServiciosComponent } from './pages/servicios/servicios.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { AppRoutingModulo } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ResumenComponent,
    PortafolioComponent,
    ServiciosComponent,
    ContactoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModulo
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
