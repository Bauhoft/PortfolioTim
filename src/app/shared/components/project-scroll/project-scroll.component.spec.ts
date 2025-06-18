import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectScrollComponent } from './project-scroll.component';

describe('ProjectScrollComponent', () => {
  let component: ProjectScrollComponent;
  let fixture: ComponentFixture<ProjectScrollComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectScrollComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectScrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
