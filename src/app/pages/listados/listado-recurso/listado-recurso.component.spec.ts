import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoRecursoComponent } from './listado-recurso.component';

describe('ListadoRecursoComponent', () => {
  let component: ListadoRecursoComponent;
  let fixture: ComponentFixture<ListadoRecursoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadoRecursoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoRecursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
