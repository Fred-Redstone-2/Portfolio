import { Component, input, InputSignal } from '@angular/core';

@Component({
  selector: 'app-resume-section-mdash-item',
  imports: [],
  templateUrl: './resume-section-mdash-item.component.html',
})
export class ResumeSectionMdashItemComponent {
  readonly itemTitle: InputSignal<string> = input.required<string>();
  readonly subtitle: InputSignal<string> = input.required<string>();
  readonly extra: InputSignal<string | undefined> = input<string>();
}
