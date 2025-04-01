import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SeleccionCuentaPage } from './seleccion-cuenta.page';

describe('SeleccionCuentaPage', () => {
  let component: SeleccionCuentaPage;
  let fixture: ComponentFixture<SeleccionCuentaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SeleccionCuentaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
