import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConfigPreferenciasPage } from './config-preferencias.page';

describe('ConfigPreferenciasPage', () => {
  let component: ConfigPreferenciasPage;
  let fixture: ComponentFixture<ConfigPreferenciasPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ConfigPreferenciasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
