import { Component } from '@angular/core';

@Component({
  selector: 'app-page-layout',
  imports: [],
  templateUrl: './page-layout.component.html',
  host: {
    class: 'flex-1 flex flex-col', // Fait en sorte que cela prenne tout l'espace disponible
  },
})
export class PageLayoutComponent {

}
