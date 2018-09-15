import { RouterModule, Routes } from '@angular/router';

export const appRoutes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
];

export const routing = RouterModule.forRoot(appRoutes);
