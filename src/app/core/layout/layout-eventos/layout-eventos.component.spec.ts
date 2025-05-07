import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutEventosComponent } from './layout-eventos.component';

describe('LayoutEventosComponent', () => {
  let component: LayoutEventosComponent;
  let fixture: ComponentFixture<LayoutEventosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LayoutEventosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LayoutEventosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
