import { Component, input, InputSignal } from '@angular/core';
import { PillListComponent } from '@app/components/pill-list/pill-list.component';
import { ProjectDetails } from '@app/data-structures/projects';

@Component({
  selector: 'app-project-preview',
  imports: [PillListComponent],
  templateUrl: './project-preview.component.html',
})
export class ProjectPreviewComponent {
  project: InputSignal<ProjectDetails> = input.required<ProjectDetails>();
}
