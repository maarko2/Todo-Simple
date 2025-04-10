import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VincularCuentaPage } from './vincular-cuenta.page';

describe('VincularCuentaPage', () => {
  let component: VincularCuentaPage;
  let fixture: ComponentFixture<VincularCuentaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(VincularCuentaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
