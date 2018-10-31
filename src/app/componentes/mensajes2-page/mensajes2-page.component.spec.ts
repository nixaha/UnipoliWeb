import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Mensajes2PageComponent } from './mensajes2-page.component';

describe('Mensajes2PageComponent', () => {
  let component: Mensajes2PageComponent;
  let fixture: ComponentFixture<Mensajes2PageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Mensajes2PageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Mensajes2PageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
