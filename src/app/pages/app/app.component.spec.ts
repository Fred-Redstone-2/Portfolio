import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { provideRouter } from '@angular/router';
import { Component } from '@angular/core';
import { FooterComponent } from '@app/components/footer/footer.component';

describe('AppComponent', () => {
  @Component({
    selector: 'app-footer',
    template: '',
  })
  class MockFooterComponent {}

  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
      providers: [provideRouter([])],
    })
    .overrideComponent(AppComponent, {
      remove: {
        imports: [FooterComponent],
      },
      add: {
        imports: [MockFooterComponent],
      },
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
