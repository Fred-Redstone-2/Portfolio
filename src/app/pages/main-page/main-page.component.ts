import { Component } from '@angular/core';
import { PageLayoutComponent } from '@app/pages/page-layout/page-layout.component';
import { ProjectListComponent } from '@app/components/project-list/project-list.component';

@Component({
  selector: 'app-main-page',
  imports: [PageLayoutComponent, ProjectListComponent],
  templateUrl: './main-page.component.html',
  host: {
    class: 'flex-1 flex flex-col', // Fait en sorte que cela prenne tout l'espace disponible
  },
})
export class MainPageComponent {

}
