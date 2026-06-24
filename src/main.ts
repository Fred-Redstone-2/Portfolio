import { bootstrapApplication } from '@angular/platform-browser';
import { enableProdMode, enableProfiling, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter, Routes } from '@angular/router';
import { environment } from './environments/environment';

import { AppComponent } from '@app/pages/app/app.component';
import { MainPageComponent } from '@app/pages/main-page/main-page.component';
import { CvPageComponent } from '@app/pages/cv-page/cv-page.component';


if (environment.production) {
  enableProdMode();
}

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: MainPageComponent },
  { path: 'cv', component: CvPageComponent },
  { path: '**', redirectTo: '/home' },
];

enableProfiling();
bootstrapApplication(AppComponent, {
  providers: [provideBrowserGlobalErrorListeners(), provideRouter(routes)],
})
  // eslint-disable-next-line no-console
  .catch((err) => console.error(err));
