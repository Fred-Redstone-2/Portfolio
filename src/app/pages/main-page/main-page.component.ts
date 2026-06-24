import { Component } from '@angular/core';
import { ProjectListComponent } from '@app/components/project-list/project-list.component';

@Component({
  selector: 'app-main-page',
  imports: [ProjectListComponent],
  templateUrl: './main-page.component.html',
  host: {
    class: 'flex-1 flex flex-col',
  },
})
export class MainPageComponent {

}
