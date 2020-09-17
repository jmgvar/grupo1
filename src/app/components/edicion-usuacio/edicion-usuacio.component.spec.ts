import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdicionUsuacioComponent } from './edicion-usuacio.component';

describe('EdicionUsuacioComponent', () => {
  let component: EdicionUsuacioComponent;
  let fixture: ComponentFixture<EdicionUsuacioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EdicionUsuacioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EdicionUsuacioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
