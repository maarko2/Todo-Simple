import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProfileCuidadorPage } from './profile-cuidador.page';

describe('ProfileCuidadorPage', () => {
  let component: ProfileCuidadorPage;
  let fixture: ComponentFixture<ProfileCuidadorPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ProfileCuidadorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
