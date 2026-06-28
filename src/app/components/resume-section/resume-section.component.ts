import { Component, input, InputSignal } from '@angular/core';

@Component({
  selector: 'app-resume-section',
  imports: [],
  templateUrl: './resume-section.component.html',
})
export class ResumeSectionComponent {
  readonly sectionTitle: InputSignal<string> = input.required<string>();
}
