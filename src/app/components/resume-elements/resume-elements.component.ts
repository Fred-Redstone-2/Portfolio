import { Component, computed, Signal } from '@angular/core';

import { LinkComponent } from '@app/components/link/link.component';
import { ResumeSectionComponent } from '@app/components/resume-section/resume-section.component';
import { UrlComponent } from '@app/components/url/url.component';
import { PillListComponent } from '@app/components/pill-list/pill-list.component';
import { SimpleMarkdownPipe } from '@app/utilities/simple-markdown.pipe';

import { CONTACTS, EMAIL, RESUME, RESUME_END_MESSAGE } from '@app/data-structures/constants';
import { ContactItem, ResumeData } from '@app/data-structures/resume';
import { TechSkills } from '@app/data-structures/tech-skills';


@Component({
  selector: 'app-resume-elements',
  imports: [LinkComponent, ResumeSectionComponent, UrlComponent, PillListComponent, SimpleMarkdownPipe],
  templateUrl: './resume-elements.component.html',
})
export class ResumeElementsComponent {
  protected readonly resume: Signal<ResumeData> = computed(() => RESUME);
  protected readonly skillsArray: Signal<[string, TechSkills[][]][]> = computed(() => Object.entries(RESUME.techSkills));

  protected readonly contacts: Signal<ContactItem[]> = computed(() => CONTACTS);
  protected readonly email: Signal<string> = computed(() => EMAIL);
  protected readonly endMessage: Signal<string> = computed(() => RESUME_END_MESSAGE);
}
