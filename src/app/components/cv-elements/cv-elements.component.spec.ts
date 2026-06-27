import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CvElementsComponent } from './cv-elements.component';

describe('CvElementsComponent', () => {
  let component: CvElementsComponent;
  let fixture: ComponentFixture<CvElementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CvElementsComponent],
    })
    .compileComponents();

    fixture = TestBed.createComponent(CvElementsComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
