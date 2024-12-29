import { Routes } from '@angular/router';
import { HomeComponent } from './dashboard/home/home.component';
import { RegisterComponent } from './dashboard/register/register.component';
import { LoginComponent } from './dashboard/login/login.component';

// Lazy Loading => components are loaded only when needed, improving initial load times.

export const routes: Routes = [
    {
        path: '',
        component:HomeComponent
        //loadComponent: () => import('./dashboard/home/home.component').then(m => m.HomeComponent),
    },
    {
        path: 'register',
        component:RegisterComponent
        //loadComponent: () => import('./dashboard/register/register.component').then(m => m.RegisterComponent),
    },
    {
        path: 'login',
        component:LoginComponent
        //loadComponent: () => import('./dashboard/login/login.component').then(m => m.LoginComponent),
    },
];


