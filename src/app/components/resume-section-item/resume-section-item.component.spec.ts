import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeSectionItemComponent } from './resume-section-item.component';

describe('ResumeSectionItemComponent', () => {
  let component: ResumeSectionItemComponent;
  let fixture: ComponentFixture<ResumeSectionItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResumeSectionItemComponent],
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResumeSectionItemComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
