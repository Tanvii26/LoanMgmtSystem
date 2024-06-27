import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalLoanFormComponent } from './personal-loan-form.component';

describe('PersonalLoanFormComponent', () => {
  let component: PersonalLoanFormComponent;
  let fixture: ComponentFixture<PersonalLoanFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersonalLoanFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonalLoanFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
