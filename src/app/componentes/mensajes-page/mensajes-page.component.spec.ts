import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MensajesPageComponent } from './mensajes-page.component';

describe('MensajesPageComponent', () => {
  let component: MensajesPageComponent;
  let fixture: ComponentFixture<MensajesPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MensajesPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MensajesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
