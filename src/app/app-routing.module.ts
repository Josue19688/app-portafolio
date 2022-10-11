import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { HomeComponent } from './pages/home/home.component';
import { PortafolioComponent } from './pages/portafolio/portafolio.component';
import { ResumenComponent } from './pages/resumen/resumen.component';
import { ServiciosComponent } from './pages/servicios/servicios.component';




const app_routes:Routes=[
  {path:'',component:HomeComponent},
  {path:'inicio',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'resumen',component:ResumenComponent},
  {path:'portafolio',component:PortafolioComponent},
  {path:'servicios',component:ServiciosComponent},
  {path:'contacto',component:ContactoComponent},
  {path:'**', pathMatch:'full', redirectTo:'/'}
];


@NgModule({
  imports:[
    RouterModule.forRoot(app_routes,{useHash:true})
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModulo{}
