import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';

import { MainPageComponent } from './main-page.component';


describe('MainPageComponent', () => {
  @Component({
    selector: 'app-page-layout',
    template: '',
  })
  class MockPageLayoutComponent {}

  @Component({
    selector: 'app-project-list',
    template: '',
  })
  class MockProjectListComponent {}

  let component: MainPageComponent;
  let fixture: ComponentFixture<MainPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainPageComponent],
    })
      .overrideComponent(MainPageComponent, {
        set: {
          imports: [MockPageLayoutComponent, MockProjectListComponent],
        },
      })
      .compileComponents();

    fixture = TestBed.createComponent(MainPageComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
