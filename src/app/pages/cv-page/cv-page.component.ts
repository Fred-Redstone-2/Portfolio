import { Component, inject } from '@angular/core';
import { Location } from '@angular/common';
import { PageLayoutComponent } from '@app/pages/page-layout/page-layout.component';
import { CvElementsComponent } from '@app/components/cv-elements/cv-elements.component';


@Component({
  selector: 'app-cv-page',
  imports: [PageLayoutComponent, CvElementsComponent],
  templateUrl: './cv-page.component.html',
  host: {
    class: 'flex-1 flex flex-col', // Fait en sorte que cela prenne tout l'espace disponible
  },
})
export class CvPageComponent {
  private readonly location = inject(Location);

  protected goBack(): void {
    this.location.back();
  }
}
