import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, input } from '@angular/core';

import { ProjectPreviewComponent } from './project-preview.component';

describe('ProjectPreviewComponent', () => {
  @Component({
    selector: 'app-pill-list',
    template: '',
  })
  class MockPillListComponent {
    values = input<string[]>();
  }

  @Component({
    selector: 'app-link',
    template: '',
  })
  class MockLinkComponent {
    value = input<string>();
  }

  let component: ProjectPreviewComponent;
  let fixture: ComponentFixture<ProjectPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectPreviewComponent],
    })
      .overrideComponent(ProjectPreviewComponent, {
        set: {
          imports: [MockPillListComponent, MockLinkComponent],
        },
      })
      .compileComponents();

    fixture = TestBed.createComponent(ProjectPreviewComponent);
    fixture.componentRef.setInput('project', '');
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
