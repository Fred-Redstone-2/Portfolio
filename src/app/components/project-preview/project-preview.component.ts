import { Component, input, InputSignal } from '@angular/core';
import { ProjectDetails } from '@app/data-structures/projects';

@Component({
  selector: 'app-project-preview',
  imports: [],
  templateUrl: './project-preview.component.html',
})
export class ProjectPreviewComponent {
  project: InputSignal<ProjectDetails> = input.required<ProjectDetails>();
}
