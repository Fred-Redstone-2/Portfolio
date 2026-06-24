import { Component, input, InputSignal } from '@angular/core';

@Component({
  selector: 'app-url',
  imports: [],
  templateUrl: './url.component.html',
})
export class UrlComponent {
  readonly value: InputSignal<string> = input.required<string>();
  readonly replacementText: InputSignal<string> = input.required<string>();
}
