import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RefundsCancellationsComponent } from './refunds-cancellations.component';

describe('RefundsCancellationsComponent', () => {
  let component: RefundsCancellationsComponent;
  let fixture: ComponentFixture<RefundsCancellationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RefundsCancellationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RefundsCancellationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
