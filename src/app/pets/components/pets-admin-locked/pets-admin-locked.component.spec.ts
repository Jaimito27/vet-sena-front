import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetsAdminLockedComponent } from './pets-admin-locked.component';

describe('PetsAdminLockedComponent', () => {
  let component: PetsAdminLockedComponent;
  let fixture: ComponentFixture<PetsAdminLockedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PetsAdminLockedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PetsAdminLockedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
