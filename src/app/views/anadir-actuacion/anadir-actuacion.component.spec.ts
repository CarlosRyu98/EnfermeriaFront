import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnadirActuacionComponent } from './anadir-actuacion.component';

describe('AnadirActuacionComponent', () => {
  let component: AnadirActuacionComponent;
  let fixture: ComponentFixture<AnadirActuacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnadirActuacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnadirActuacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
