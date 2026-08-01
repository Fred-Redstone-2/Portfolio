import { Location } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
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
export class ResumePageComponent implements OnInit {
  private readonly location = inject(Location);
  private readonly metaDataService = inject(Meta);

  ngOnInit(): void {
    this.metaDataService.updateTag({
      name: 'description',
      content: 'Mon CV en ligne, détaillant mon profil, mes compétences techniques, ma formation, mon expérience, mes projets et mes langues.',
    });
  }

  protected goBack(): void {
    this.location.back();
  }
}
