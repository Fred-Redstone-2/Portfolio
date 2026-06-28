import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumePageComponent } from './resume-page.component';

describe('CvPageComponent', () => {
  let component: ResumePageComponent;
  let fixture: ComponentFixture<ResumePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResumePageComponent],
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
