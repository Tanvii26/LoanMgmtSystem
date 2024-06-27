// // import { bootstrapApplication } from '@angular/platform-browser';
// // import { appConfig } from './app/app.config';
// // import { AppComponent } from './app/app.component';

// // bootstrapApplication(AppComponent, appConfig)
// //   .catch((err) => console.error(err));

// import { bootstrapApplication } from '@angular/platform-browser';
// import { AppComponent } from './app/app.component';
// import { provideRouter } from '@angular/router';
// import { routes } from './app/app-routing.module'; // Import your routes

// bootstrapApplication(AppComponent, {
//   providers: [
//     provideRouter(routes),
//     // Any other providers you need
//   ]
// }).catch(err => console.error(err));

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
