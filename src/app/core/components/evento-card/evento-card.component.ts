import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-evento-card',
  imports: [CommonModule],
  templateUrl: './evento-card.component.html',
  styleUrl: './evento-card.component.css'
})
export class EventoCardComponent {
  @Input() id!: string;
  @Input() titulo!: string;
  @Input() descricao!: string;
  @Input() dataHora!: string;
  @Input() localizacao!: string;
  @Input() imagemUrl?: string;

  constructor(private router: Router) {}

  abrirDetalhes() {
    this.router.navigate(['/eventos', this.id]);
  }
}
