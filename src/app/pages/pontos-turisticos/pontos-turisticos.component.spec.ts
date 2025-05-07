import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PontosTuristicosComponent } from './pontos-turisticos.component';

describe('PontosTuristicosComponent', () => {
  let component: PontosTuristicosComponent;
  let fixture: ComponentFixture<PontosTuristicosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PontosTuristicosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PontosTuristicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
