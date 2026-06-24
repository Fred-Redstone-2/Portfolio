import { Component, computed, Signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProjectPreviewComponent } from '@app/components/project-preview/project-preview.component';
import { PROJECT_LIST, ProjectDetails } from '@app/data-structures/projects';

const MAX_COLUMNS = 3;

@Component({
  selector: 'app-project-list',
  imports: [ProjectPreviewComponent, RouterLink],
  templateUrl: './project-list.component.html',
})
export class ProjectListComponent {
  protected projectList: Signal<ProjectDetails[]> = computed(() => PROJECT_LIST);
  private listLength: Signal<number> = computed(() => this.projectList().length);
  protected nbColumns: Signal<number> = computed(() => this.listLength() < MAX_COLUMNS ? this.listLength() : MAX_COLUMNS);

  protected shouldBeCentered(projectIndex: number): boolean {
    return this.listLength() % MAX_COLUMNS === 1 && projectIndex === this.listLength() - 1;
  }
}
