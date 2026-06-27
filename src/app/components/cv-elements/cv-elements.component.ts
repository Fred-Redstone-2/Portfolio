import { Component, computed, Signal } from '@angular/core';

import { CvSectionComponent } from '@app/components/cv-section/cv-section.component';
import { UrlComponent } from '@app/components/url/url.component';
import { SimpleMarkdownPipe } from '@app/utilities/simple-markdown.pipe';

import { CONTACTS, EMAIL, RESUME, RESUME_END_MESSAGE } from '@app/data-structures/constants';
import { ContactItem, ResumeData } from '@app/data-structures/resume';
import { TechSkills } from '@app/data-structures/tech-skills';


@Component({
  selector: 'app-cv-elements',
  imports: [CvSectionComponent, UrlComponent, SimpleMarkdownPipe],
  templateUrl: './cv-elements.component.html',
})
export class CvElementsComponent {
  protected readonly resume: Signal<ResumeData> = computed(() => RESUME);
  protected readonly skillsArray: Signal<[string, TechSkills[][]][]> = computed(() => Object.entries(RESUME.techSkills));

  protected readonly contacts: Signal<ContactItem[]> = computed(() => CONTACTS);
  protected readonly email: Signal<string> = computed(() => EMAIL);
  protected readonly endMessage: Signal<string> = computed(() => RESUME_END_MESSAGE);
}
