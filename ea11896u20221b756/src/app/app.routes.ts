import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadComponent: () =>
      import('./observatories/presentation/views/home/home')
        .then(m => m.Home)
  },
  {
    path: 'economic-indicators',
    children: [
      {
        path: 'new',
        loadComponent: () =>
          import('./observatories/presentation/views/new-economic-indicator/new-economic-indicator')
            .then(m => m.NewEconomicIndicator)
      }
    ]
  },
  {
    path: '**',
    loadComponent: () =>
      import('./shared/presentation/views/page-not-found/page-not-found')
        .then(m => m.PageNotFound)
  }
];
