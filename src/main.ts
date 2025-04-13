import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { initializeApp } from '@angular/fire/app';
import { getAnalytics } from '@angular/fire/analytics';
import { environment } from './environments/environment';

bootstrapApplication(AppComponent, appConfig).catch((err) =>
  console.error(err)
);

const app = initializeApp(environment.firebaseConfig);

const analytics = getAnalytics(app);
