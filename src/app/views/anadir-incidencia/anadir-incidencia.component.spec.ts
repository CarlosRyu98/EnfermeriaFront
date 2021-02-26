import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnadirIncidenciaComponent } from './anadir-incidencia.component';

describe('AnadirIncidenciaComponent', () => {
  let component: AnadirIncidenciaComponent;
  let fixture: ComponentFixture<AnadirIncidenciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnadirIncidenciaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnadirIncidenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
