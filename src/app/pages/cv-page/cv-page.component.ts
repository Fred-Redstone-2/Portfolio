import { Component } from '@angular/core';
import { PageLayoutComponent } from '@app/pages/page-layout/page-layout.component';
import { CvSectionComponent } from '@app/components/cv-section/cv-section.component';

@Component({
  selector: 'app-cv-page',
  imports: [PageLayoutComponent, CvSectionComponent],
  templateUrl: './cv-page.component.html',
  host: {
    class: 'flex-1 flex flex-col', // Fait en sorte que cela prenne tout l'espace disponible
  },
})
export class CvPageComponent {

}
