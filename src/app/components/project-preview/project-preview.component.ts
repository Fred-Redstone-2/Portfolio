import { Component, input, InputSignal } from '@angular/core';
import { PillListComponent } from '@app/components/pill-list/pill-list.component';
import { LinkComponent } from '@app/components/link/link.component';
import { ResumeProjectItem } from '@app/data-structures/resume';

@Component({
  selector: 'app-project-preview',
  imports: [PillListComponent, LinkComponent],
  templateUrl: './project-preview.component.html',
})
export class ProjectPreviewComponent {
  readonly project: InputSignal<ResumeProjectItem> = input.required<ResumeProjectItem>();
}
