import { Component, computed, Signal } from '@angular/core';
import { UrlComponent } from '@app/components/url/url.component';
import { EMAIL, GITHUB } from '@app/data-structures/constants';

@Component({
  selector: 'app-footer',
  imports: [UrlComponent],
  templateUrl: './footer.component.html',
})
export class FooterComponent {
  protected readonly email: Signal<string> = computed(() => EMAIL);
  protected readonly gitHub: Signal<string> = computed(() => GITHUB);
}
