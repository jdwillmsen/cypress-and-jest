import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        loadComponent: () => import('./components/home/home.component').then(mod => mod.HomeComponent)
    },
    {
        path: 'reports',
        loadComponent: () => import('./components/report-template/report-template.component').then(mod => mod.ReportTemplateComponent)
    },
    {
        path: 'examples',
        loadComponent: () => import('./components/examples/examples.component').then(mod => mod.ExamplesComponent)
    }
];
