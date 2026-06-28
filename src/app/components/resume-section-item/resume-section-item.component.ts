import { Component, input, InputSignal } from '@angular/core';

@Component({
  selector: 'app-resume-section-item',
  imports: [],
  templateUrl: './resume-section-item.component.html',
})
export class ResumeSectionItemComponent {
  readonly itemTitle: InputSignal<string> = input.required<string>();
  readonly itemsArray: InputSignal<string[] | undefined> = input<string[]>();
}
