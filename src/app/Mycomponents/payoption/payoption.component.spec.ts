import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayoptionComponent } from './payoption.component';

describe('PayoptionComponent', () => {
  let component: PayoptionComponent;
  let fixture: ComponentFixture<PayoptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PayoptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PayoptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
