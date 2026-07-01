import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Mock } from 'vitest';
import { Location } from '@angular/common';
import { Component } from '@angular/core';

import { ResumePageComponent } from './resume-page.component';

describe('CvPageComponent', () => {
  @Component({
    selector: 'app-page-layout',
    template: '',
  })
  class MockPageLayoutComponent {}

  @Component({
    selector: 'app-resume-elements',
    template: '',
  })
  class MockResumeElementsComponent {}

  let component: ResumePageComponent;
  let fixture: ComponentFixture<ResumePageComponent>;
  let mockLocationService: {
    back: Mock<typeof Location.prototype.back>,
  };

  beforeEach(async () => {
    mockLocationService = {
      back: vi.fn(),
    };

    await TestBed.configureTestingModule({
      imports: [ResumePageComponent],
    })
      .overrideComponent(ResumePageComponent, {
        set: {
          imports: [MockPageLayoutComponent, MockResumeElementsComponent],
          providers: [
            { provide: Location, useValue: mockLocationService },
          ],
        },
      })
      .compileComponents();

    fixture = TestBed.createComponent(ResumePageComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
