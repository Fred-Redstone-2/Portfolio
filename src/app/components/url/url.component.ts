import { Component, input, InputSignal } from '@angular/core';
import { LinkComponent } from '@app/components/link/link.component';

@Component({
  selector: 'app-url',
  imports: [LinkComponent],
  templateUrl: './url.component.html',
})
export class UrlComponent {
  readonly value: InputSignal<string> = input.required<string>();
  readonly replacementText: InputSignal<string> = input.required<string>();
}
