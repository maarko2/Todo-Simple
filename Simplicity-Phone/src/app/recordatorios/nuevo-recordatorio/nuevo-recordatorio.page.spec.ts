import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NuevoRecordatorioPage } from './nuevo-recordatorio.page';

describe('NuevoRecordatorioPage', () => {
  let component: NuevoRecordatorioPage;
  let fixture: ComponentFixture<NuevoRecordatorioPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(NuevoRecordatorioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
