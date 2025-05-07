import { Component } from '@angular/core';
import { Evento } from '../../model/Evento';
import { ActivatedRoute } from '@angular/router';
import { mockEventos } from '../../../shared/mock/eventos-mock';

@Component({
  selector: 'app-evento-detalhe',
  imports: [],
  templateUrl: './evento-detalhe.component.html',
  styleUrl: './evento-detalhe.component.css'
})
export class EventoDetalheComponent {
  evento?: Evento;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.evento = mockEventos.find(e => e.id === id!);
  }
}
