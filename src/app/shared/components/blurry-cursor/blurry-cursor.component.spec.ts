import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlurryCursorComponent } from './blurry-cursor.component';

describe('BlurryCursorComponent', () => {
  let component: BlurryCursorComponent;
  let fixture: ComponentFixture<BlurryCursorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlurryCursorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlurryCursorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
