import { Component, computed, Signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProjectPreviewComponent } from '@app/components/project-preview/project-preview.component';
import { RESUME } from '@app/data-structures/constants';
import { ResumeProjectItem } from '@app/data-structures/resume';

const MAX_COLUMNS = 3;

@Component({
  selector: 'app-project-list',
  imports: [ProjectPreviewComponent, RouterLink],
  templateUrl: './project-list.component.html',
})
export class ProjectListComponent {
  protected readonly projectList: Signal<ResumeProjectItem[]> = computed(() => RESUME.projects);
  private readonly listLength: Signal<number> = computed(() => this.projectList().length);
  protected readonly nbColumns: Signal<number> = computed(() => this.listLength() < MAX_COLUMNS ? this.listLength() : MAX_COLUMNS);

  protected shouldBeCentered(projectIndex: number): boolean {
    return this.listLength() % MAX_COLUMNS === 1 && projectIndex === this.listLength() - 1;
  }
}
