import { Routes } from '@angular/router';
import { Products } from './components/products/products';
import { Orders } from './components/orders/orders';
import { App } from './app';
import { Auth } from './components/auth/auth';

export const routes: Routes = [
    {path: '', component: Auth},
    {path: 'products', component: Products},
    {path: 'orders', component: Orders}
];
