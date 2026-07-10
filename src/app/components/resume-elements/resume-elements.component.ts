import { Component, computed, Signal } from '@angular/core';

import { LinkComponent } from '@app/components/link/link.component';
import { PillListComponent } from '@app/components/pill-list/pill-list.component';
import { ResumeSectionItemComponent } from '@app/components/resume-section-item/resume-section-item.component';
import { ResumeSectionMdashItemComponent } from '@app/components/resume-section-mdash-item/resume-section-mdash-item.component';
import { ResumeSectionComponent } from '@app/components/resume-section/resume-section.component';
import { UrlComponent } from '@app/components/url/url.component';
import { SimpleMarkdownPipe } from '@app/utilities/simple-markdown.pipe';

import { CONTACTS, RESUME, RESUME_END_MESSAGE } from '@app/data-structures/constants';
import { ResumeData } from '@app/data-structures/resume';
import { TechSkills } from '@app/data-structures/tech-skills';
import { ContactInfo } from '@app/data-structures/contact';


@Component({
  selector: 'app-resume-elements',
  imports: [
    LinkComponent, UrlComponent, PillListComponent, SimpleMarkdownPipe,
    ResumeSectionComponent, ResumeSectionItemComponent, ResumeSectionMdashItemComponent,
  ],
  templateUrl: './resume-elements.component.html',
})
export class ResumeElementsComponent {
  protected readonly resume: Signal<ResumeData> = computed(() => RESUME);
  protected readonly skillsArray: Signal<[string, TechSkills[][]][]> = computed(() =>
    Object.entries(RESUME.techSkills),
  );

  protected readonly contacts: Signal<ContactInfo[]> = computed(() => Object.values(CONTACTS));
  protected readonly email: Signal<string> = computed(() => CONTACTS.Email.url);
  protected readonly endMessage: Signal<string> = computed(() => RESUME_END_MESSAGE);
}
