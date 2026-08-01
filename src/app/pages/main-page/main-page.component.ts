import { Component, inject, OnInit } from '@angular/core';
import { PageLayoutComponent } from '@app/pages/page-layout/page-layout.component';
import { ProjectListComponent } from '@app/components/project-list/project-list.component';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-main-page',
  imports: [PageLayoutComponent, ProjectListComponent],
  templateUrl: './main-page.component.html',
  host: {
    class: 'flex-1 flex flex-col', // Fait en sorte que cela prenne tout l'espace disponible
  },
})
export class MainPageComponent implements OnInit {
  private readonly metaDataService = inject(Meta);

  ngOnInit(): void {
    this.metaDataService.updateTag({
      name: 'description',
      content: 'Mon portfolio en ligne, détaillant mes projets notables et mon CV.',
    });
  }
}
