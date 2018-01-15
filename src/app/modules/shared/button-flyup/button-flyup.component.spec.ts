import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonFlyupComponent } from './button-flyup.component';

describe('ButtonFlyupComponent', () => {
  let component: ButtonFlyupComponent;
  let fixture: ComponentFixture<ButtonFlyupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonFlyupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonFlyupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
