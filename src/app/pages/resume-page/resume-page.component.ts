import { Location } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ResumeElementsComponent } from '@app/components/resume-elements/resume-elements.component';
import { PageLayoutComponent } from '@app/pages/page-layout/page-layout.component';


@Component({
  selector: 'app-resume-page',
  imports: [PageLayoutComponent, ResumeElementsComponent],
  templateUrl: './resume-page.component.html',
  host: {
    class: 'flex-1 flex flex-col', // Fait en sorte que cela prenne tout l'espace disponible
  },
})
export class ResumePageComponent {
  private readonly location = inject(Location);

  protected goBack(): void {
    this.location.back();
  }
}
