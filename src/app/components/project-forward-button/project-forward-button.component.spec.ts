import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectForwardButtonComponent } from './project-forward-button.component';

describe('ProjectForwardButtonComponent', () => {
  let component: ProjectForwardButtonComponent;
  let fixture: ComponentFixture<ProjectForwardButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectForwardButtonComponent],
    })
      .compileComponents();

    fixture = TestBed.createComponent(ProjectForwardButtonComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
