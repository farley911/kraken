import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutlineButtonFlyupComponent } from './outline-button-flyup.component';

describe('OutlineButtonFlyupComponent', () => {
  let component: OutlineButtonFlyupComponent;
  let fixture: ComponentFixture<OutlineButtonFlyupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutlineButtonFlyupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutlineButtonFlyupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
