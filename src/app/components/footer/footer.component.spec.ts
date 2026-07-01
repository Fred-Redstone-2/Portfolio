import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, input } from '@angular/core';

import { FooterComponent } from './footer.component';

describe('FooterComponent', () => {
  @Component({
    selector: 'app-url',
    template: '',
  })
  class MockUrlComponent {
    value = input<string>();
    replacementText = input<string>();
  }

  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterComponent],
    })
      .overrideComponent(FooterComponent, {
        set: {
          imports: [MockUrlComponent],
        },
      })
      .compileComponents();

    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
