import { Component, input, InputSignal } from '@angular/core';

@Component({
  selector: 'app-link',
  imports: [],
  templateUrl: './link.component.html',
})
export class LinkComponent {
  readonly value: InputSignal<string | undefined> = input<string>();

  protected handleClick(event: PointerEvent): void {
    if (!this.value()) {
      event.preventDefault();
    }
  }
}
