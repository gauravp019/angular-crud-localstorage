import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputTabComponent } from './input-tab.component';

describe('InputTabComponent', () => {
  let component: InputTabComponent;
  let fixture: ComponentFixture<InputTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputTabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
