import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeElementsComponent } from './resume-elements.component';

describe('CvElementsComponent', () => {
  let component: ResumeElementsComponent;
  let fixture: ComponentFixture<ResumeElementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResumeElementsComponent],
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
