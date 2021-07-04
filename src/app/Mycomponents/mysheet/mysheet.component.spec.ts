import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MysheetComponent } from './mysheet.component';

describe('MysheetComponent', () => {
  let component: MysheetComponent;
  let fixture: ComponentFixture<MysheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MysheetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MysheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
