import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacdashComponent } from './facdash.component';

describe('FacdashComponent', () => {
  let component: FacdashComponent;
  let fixture: ComponentFixture<FacdashComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FacdashComponent]
    });
    fixture = TestBed.createComponent(FacdashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
