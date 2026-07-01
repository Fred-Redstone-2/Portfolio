import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, input } from '@angular/core';

import { UrlComponent } from './url.component';

describe('UrlComponent', () => {
  @Component({
    selector: 'app-link',
    template: '',
  })
  class MockLinkComponent {
    value = input<string>();
  }

  let component: UrlComponent;
  let fixture: ComponentFixture<UrlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UrlComponent],
    })
      .overrideComponent(UrlComponent, {
        set: {
          imports: [MockLinkComponent],
        },
      })
      .compileComponents();

    fixture = TestBed.createComponent(UrlComponent);
    fixture.componentRef.setInput('value', '');
    fixture.componentRef.setInput('replacementText', '');
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
