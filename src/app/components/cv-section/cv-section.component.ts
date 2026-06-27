import { Component, input, InputSignal } from '@angular/core';

@Component({
  selector: 'app-cv-section',
  imports: [],
  templateUrl: './cv-section.component.html',
})
export class CvSectionComponent {
  sectionTitle: InputSignal<string> = input.required<string>();
}
