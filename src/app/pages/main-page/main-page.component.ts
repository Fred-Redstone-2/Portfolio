import { Component } from '@angular/core';
import { ProjectListComponent } from '@app/components/project-list/project-list.component';

@Component({
  selector: 'app-main-page',
  imports: [ProjectListComponent],
  templateUrl: './main-page.component.html',
  host: {
    class: 'flex-1', // Fait en sorte que cela prenne tout l'espace disponible
  },
})
export class MainPageComponent {

}
