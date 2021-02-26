import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnadirAlumnoComponent } from './anadir-alumno.component';

describe('AnadirAlumnoComponent', () => {
  let component: AnadirAlumnoComponent;
  let fixture: ComponentFixture<AnadirAlumnoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnadirAlumnoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnadirAlumnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
