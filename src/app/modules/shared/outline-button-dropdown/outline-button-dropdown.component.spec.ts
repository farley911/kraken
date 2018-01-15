import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutlineButtonDropdownComponent } from './outline-button-dropdown.component';

describe('OutlineButtonDropdownComponent', () => {
  let component: OutlineButtonDropdownComponent;
  let fixture: ComponentFixture<OutlineButtonDropdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutlineButtonDropdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutlineButtonDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
