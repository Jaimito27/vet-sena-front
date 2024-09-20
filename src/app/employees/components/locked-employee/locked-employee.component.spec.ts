import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LockedEmployeeComponent } from './locked-employee.component';

describe('BlockedEmployeeComponent', () => {
  let component: LockedEmployeeComponent;
  let fixture: ComponentFixture<LockedEmployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LockedEmployeeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LockedEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
