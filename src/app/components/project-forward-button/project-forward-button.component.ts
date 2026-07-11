import { Component, signal, Signal } from '@angular/core';

@Component({
  selector: 'app-project-forward-button',
  imports: [],
  templateUrl: './project-forward-button.component.html',
})
export class ProjectForwardButtonComponent {
  protected readonly text: Signal<string> = signal('Visiter');
}
