import { Component, input, InputSignal } from '@angular/core';

@Component({
  selector: 'app-pill-list',
  imports: [],
  templateUrl: './pill-list.component.html',
})
export class PillListComponent {
  values: InputSignal<string[]> = input.required<string[]>();
}
