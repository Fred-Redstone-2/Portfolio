import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PillListComponent } from './pill-list.component';

describe('PillListComponent', () => {
  let component: PillListComponent;
  let fixture: ComponentFixture<PillListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PillListComponent],
    })
    .compileComponents();

    fixture = TestBed.createComponent(PillListComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
