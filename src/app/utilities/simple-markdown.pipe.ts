import { inject, Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Pipe({
  name: 'simpleMarkdown',
})
export class SimpleMarkdownPipe implements PipeTransform {
  private readonly sanitizer = inject(DomSanitizer);

  transform(value: string | undefined): SafeHtml {
    if (!value) return '';

    // 1. Échapper le HTML de base pour éviter les injections XSS si le texte vient d'une source externe
    const escapedText = value
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');

    // 2. Convertir **texte** en <strong>texte</strong>
    let html = escapedText.replace(/\*\*(.*?)\*\*/g, '<strong class="font-bold">$1</strong>');

    // 3. Convertir *texte* en italique (optionnel)
    html = html.replace(/\*(.*?)\*/g, '<em class="italic">$1</em>');

    // 4. Convertir `code` en balise <code> stylisée avec Tailwind
    html = html.replace(
      /`(.*?)`/g,
      '<code class="font-mono bg-gray-100/80 text-blue-600 px-1.5 py-0.5 rounded text-sm font-semibold">$1</code>',
    );

    // 5. Convertir les \n en véritables sauts de ligne HTML (<br />)
    html = html.replace(/\n/g, '<br />');

    // 6. Autoriser Angular à afficher le HTML produit
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }
}
