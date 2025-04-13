import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import {
  getAnalytics,
  provideAnalytics,
  ScreenTrackingService,
} from '@angular/fire/analytics';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideFirebaseApp(() =>
      initializeApp({
        projectId: 'portfolio-9dd28',
        appId: '1:405543933451:web:12b7c8bd8a12f96ee0990e',
        storageBucket: 'portfolio-9dd28.firebasestorage.app',
        apiKey: 'AIzaSyCqTxuEdF4DyPCbsVT7bVLJYNodvhQo7MA',
        authDomain: 'portfolio-9dd28.firebaseapp.com',
        messagingSenderId: '405543933451',
        measurementId: 'G-K8CWT03Z0Z',
      })
    ),
    provideAnalytics(() => getAnalytics()),
    ScreenTrackingService,
  ],
};
