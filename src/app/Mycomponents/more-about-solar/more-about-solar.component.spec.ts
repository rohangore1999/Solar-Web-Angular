import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreAboutSolarComponent } from './more-about-solar.component';

describe('MoreAboutSolarComponent', () => {
  let component: MoreAboutSolarComponent;
  let fixture: ComponentFixture<MoreAboutSolarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoreAboutSolarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoreAboutSolarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
