import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, input } from '@angular/core';
import { provideRouter } from '@angular/router';

import { ProjectListComponent } from './project-list.component';
import { ResumeProjectItem } from '@app/data-structures/resume';

describe('ProjectListComponent', () => {
  @Component({
    selector: 'app-project-preview',
    template: '',
  })
  class MockProjectPreviewComponent {
    project = input<ResumeProjectItem>();
  }

  let component: ProjectListComponent;
  let fixture: ComponentFixture<ProjectListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectListComponent],
      providers: [provideRouter([])],
    })
      .overrideComponent(ProjectListComponent, {
        set: {
          imports: [MockProjectPreviewComponent],
        },
      })
      .compileComponents();

    fixture = TestBed.createComponent(ProjectListComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
