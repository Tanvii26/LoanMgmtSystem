import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeLoanFormComponent } from './home-loan-form.component';

describe('HomeLoanFormComponent', () => {
  let component: HomeLoanFormComponent;
  let fixture: ComponentFixture<HomeLoanFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeLoanFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeLoanFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
