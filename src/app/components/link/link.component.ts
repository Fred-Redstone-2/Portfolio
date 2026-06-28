import { Component, input, InputSignal } from '@angular/core';

@Component({
  selector: 'app-link',
  imports: [],
  templateUrl: './link.component.html',
})
export class LinkComponent {
  readonly value: InputSignal<string> = input.required<string>();
}
