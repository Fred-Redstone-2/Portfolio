import { NgTemplateOutlet } from '@angular/common';
import { Component, input, InputSignal } from '@angular/core';

@Component({
  selector: 'app-link',
  imports: [NgTemplateOutlet],
  templateUrl: './link.component.html',
})
export class LinkComponent {
  readonly value: InputSignal<string> = input.required<string>();
  readonly replacementText: InputSignal<string | undefined> = input<string>();
}
