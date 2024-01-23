import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedirectPetsComponent } from './redirect-pets.component';

describe('RedirectPetsComponent', () => {
  let component: RedirectPetsComponent;
  let fixture: ComponentFixture<RedirectPetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RedirectPetsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RedirectPetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
