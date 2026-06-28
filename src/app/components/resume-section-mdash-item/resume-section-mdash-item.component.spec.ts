import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeSectionMdashItemComponent } from './resume-section-mdash-item.component';

describe('ResumeSectionMdashItemComponent', () => {
  let component: ResumeSectionMdashItemComponent;
  let fixture: ComponentFixture<ResumeSectionMdashItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResumeSectionMdashItemComponent],
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResumeSectionMdashItemComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
