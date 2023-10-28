import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessiComponent } from './messi.component';

describe('MessiComponent', () => {
  let component: MessiComponent;
  let fixture: ComponentFixture<MessiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MessiComponent]
    });
    fixture = TestBed.createComponent(MessiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
