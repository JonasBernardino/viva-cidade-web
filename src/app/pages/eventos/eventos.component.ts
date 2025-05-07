import { Component } from '@angular/core';
import { EventoCardComponent } from '../../core/components/evento-card/evento-card.component';
import { Evento } from '../../core/model/Evento';
import { mockEventos } from '../../shared/mock/eventos-mock';

@Component({
  selector: 'app-eventos',
  imports: [EventoCardComponent],
  templateUrl: './eventos.component.html',
  styleUrl: './eventos.component.css'
})
export class EventosComponent {
  eventos: Evento[] = mockEventos
}
