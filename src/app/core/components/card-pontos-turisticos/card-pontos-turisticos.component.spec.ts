import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPontosTuristicosComponent } from './card-pontos-turisticos.component';

describe('CardPontosTuristicosComponent', () => {
  let component: CardPontosTuristicosComponent;
  let fixture: ComponentFixture<CardPontosTuristicosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardPontosTuristicosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardPontosTuristicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
