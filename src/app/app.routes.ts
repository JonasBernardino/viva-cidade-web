import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LayoutEventosComponent } from './core/layout/layout-eventos/layout-eventos.component';
import { EventosComponent } from './pages/eventos/eventos.component';
import { HospedagemComponent } from './pages/hospedagem/hospedagem.component';
import { PontosTuristicosComponent } from './pages/pontos-turisticos/pontos-turisticos.component';
import { ComidaComponent } from './pages/comida/comida.component';
import { PasseiosComponent } from './pages/passeios/passeios.component';
import { InfoComponent } from './pages/info/info.component';
import { LoginComponent } from './pages/login/login.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutEventosComponent,
    children: [
        { path: '', component: HomeComponent },
        {path: 'eventos', component: EventosComponent},
        {path: 'pontos-turisticos', component: PontosTuristicosComponent},
        {path: 'onde-comer', component:ComidaComponent},
        {path: 'hospedagem', component: HospedagemComponent},
        {path: 'passeios', component: PasseiosComponent},
        {path: 'info', component: InfoComponent},
        {path: 'login', component: LoginComponent},
    ],
  },
];
