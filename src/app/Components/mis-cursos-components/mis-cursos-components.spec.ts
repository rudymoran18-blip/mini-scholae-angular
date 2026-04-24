import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MisCursosComponents } from './mis-cursos-components';

describe('MisCursosComponents', () => {
  let component: MisCursosComponents;
  let fixture: ComponentFixture<MisCursosComponents>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MisCursosComponents]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MisCursosComponents);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
