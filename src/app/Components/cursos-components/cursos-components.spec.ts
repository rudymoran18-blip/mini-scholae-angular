import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursosComponents } from './cursos-components';

describe('CursosComponents', () => {
  let component: CursosComponents;
  let fixture: ComponentFixture<CursosComponents>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CursosComponents]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CursosComponents);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
