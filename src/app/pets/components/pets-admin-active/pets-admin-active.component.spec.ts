import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetsAdminActiveComponent } from './pets-admin-active.component';

describe('PetsAdminActiveComponent', () => {
  let component: PetsAdminActiveComponent;
  let fixture: ComponentFixture<PetsAdminActiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PetsAdminActiveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PetsAdminActiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
