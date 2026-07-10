import { enableProdMode, enableProfiling, provideBrowserGlobalErrorListeners } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Routes, withInMemoryScrolling } from '@angular/router';
import { environment } from './environments/environment';

import { AppComponent } from '@app/pages/app/app.component';
import { MainPageComponent } from '@app/pages/main-page/main-page.component';
import { ResumePageComponent } from '@app/pages/resume-page/resume-page.component';


if (environment.production) {
  enableProdMode();
}

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: MainPageComponent },
  { path: 'resume', component: ResumePageComponent },
  { path: '**', redirectTo: '/home' },
];

enableProfiling();
bootstrapApplication(AppComponent, {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(
      routes,
      withInMemoryScrolling({
        scrollPositionRestoration: 'enabled',
      }),
    ),
  ],
})
  // eslint-disable-next-line no-console
  .catch((err) => console.error(err));
