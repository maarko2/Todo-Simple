import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GestionPerfilesPage } from './gestion-perfiles.page';

describe('GestionPerfilesPage', () => {
  let component: GestionPerfilesPage;
  let fixture: ComponentFixture<GestionPerfilesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(GestionPerfilesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
