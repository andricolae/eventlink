import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes), provideClientHydration(withEventReplay()), provideFirebaseApp(() => initializeApp({ projectId: "eventlink-8fcb0", appId: "1:816725239968:web:58bad8ccfe4ba7aad201c5", storageBucket: "eventlink-8fcb0.firebasestorage.app", apiKey: "AIzaSyDsBr6I2RsSQT_4kp84P_6oTaHMU3PuHwc", authDomain: "eventlink-8fcb0.firebaseapp.com", messagingSenderId: "816725239968", measurementId: "G-TZBWYWRS9K" })), provideAuth(() => getAuth()), provideFirestore(() => getFirestore())
  ]
};
