import { Component } from '@angular/core';
import { NavbarComponent } from "../../../shared/navbar/navbar.component";
import { FooterComponent } from '../../../shared/footer/footer.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout-eventos',
  imports: [NavbarComponent,FooterComponent, RouterOutlet ],
  templateUrl: './layout-eventos.component.html',
  styleUrl: './layout-eventos.component.css'
})
export class LayoutEventosComponent {

}
