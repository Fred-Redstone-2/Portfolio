/* eslint-disable max-classes-per-file */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, input, Pipe, PipeTransform } from '@angular/core';

import { ResumeElementsComponent } from './resume-elements.component';

describe('CvElementsComponent', () => {
  @Component({
    selector: 'app-link',
    template: '',
  })
  class MockLinkComponent {
    value = input<string>();
  }

  @Component({
    selector: 'app-url',
    template: '',
  })
  class MockUrlComponent {
    value = input<string>();
    replacementText = input<string>();
  }

  @Component({
    selector: 'app-pill-list',
    template: '',
  })
  class MockPillListComponent {
    values = input<string[]>();
  }

  @Pipe({
    name: 'simpleMarkdown',
  })
  class MockSimpleMarkdownPipe implements PipeTransform {
    transform(value: string) {
      return value;
    }
  }

  @Component({
    selector: 'app-resume-section',
    template: '',
  })
  class MockResumeSectionComponent {}

  @Component({
    selector: 'app-resume-section-item',
    template: '',
  })
  class MockResumeSectionItemComponent {
    itemTitle = input<string>();
    itemsArray = input<string[]>();
  }

  @Component({
    selector: 'app-resume-section-mdash-item',
    template: '',
  })
  class MockResumeSectionMdashItemComponent {
    itemTitle = input<string>();
    subtitle = input<string>();
    extra = input<string>();
  }

  let component: ResumeElementsComponent;
  let fixture: ComponentFixture<ResumeElementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResumeElementsComponent],
    })
      .overrideComponent(ResumeElementsComponent, {
        set: {
          imports: [
            MockLinkComponent, MockUrlComponent, MockPillListComponent, MockSimpleMarkdownPipe,
            MockResumeSectionComponent, MockResumeSectionItemComponent, MockResumeSectionMdashItemComponent,
          ],
        },
      })
      .compileComponents();

    fixture = TestBed.createComponent(ResumeElementsComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
