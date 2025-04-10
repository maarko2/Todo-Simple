import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AuthCuidadorPage } from './auth-cuidador.page';

describe('AuthCuidadorPage', () => {
  let component: AuthCuidadorPage;
  let fixture: ComponentFixture<AuthCuidadorPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AuthCuidadorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
