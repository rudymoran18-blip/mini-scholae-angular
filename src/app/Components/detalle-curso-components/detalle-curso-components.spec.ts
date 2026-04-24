import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleCursoComponents } from './detalle-curso-components';

describe('DetalleCursoComponents', () => {
  let component: DetalleCursoComponents;
  let fixture: ComponentFixture<DetalleCursoComponents>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetalleCursoComponents]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalleCursoComponents);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
