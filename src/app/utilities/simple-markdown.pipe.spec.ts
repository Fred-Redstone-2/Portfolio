import { Mock } from 'vitest';
import { DomSanitizer } from '@angular/platform-browser';
import { TestBed } from '@angular/core/testing';

import { SimpleMarkdownPipe } from './simple-markdown.pipe';

describe('SimpleMarkdownPipe', () => {
  let pipe: SimpleMarkdownPipe;
  let mockDomSanitizer: {
    bypassSecurityTrustHtml: Mock<typeof DomSanitizer.prototype.bypassSecurityTrustHtml>
  };

  beforeEach(() => {
    mockDomSanitizer = {
      bypassSecurityTrustHtml: vi.fn().mockReturnValue(''),
    };

    TestBed.configureTestingModule({
      providers: [
        SimpleMarkdownPipe,
        { provide: DomSanitizer, useValue: mockDomSanitizer },
      ],
    });

    pipe = TestBed.runInInjectionContext(() => new SimpleMarkdownPipe);
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });
});
