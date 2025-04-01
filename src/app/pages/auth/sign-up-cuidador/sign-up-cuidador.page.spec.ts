import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SignUpCuidadorPage } from './sign-up-cuidador.page';

describe('SignUpCuidadorPage', () => {
  let component: SignUpCuidadorPage;
  let fixture: ComponentFixture<SignUpCuidadorPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SignUpCuidadorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
