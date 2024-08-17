import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { OrdersComponent } from './pages/orders/orders.component';
import { PopupAddColumnComponent } from './components/dialogs/popup-add-column/popup-add-column.component';

export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () =>
      import('./pages/login-page/login-page.component').then(
        (m) => m.LoginPageComponent
      ),
  },
  {
    path: '',
    loadComponent: () =>
      import('./pages/home-page/home-page.component').then(
        (m) => m.HomePageComponent
      ),
    children: [
      {
        path: 'orders',
        loadComponent: () =>
          import('./pages/orders/orders.component').then(
            (m) => m.OrdersComponent
          ),
      },
      {
        path: 'employees',
        loadComponent: () =>
          import('./pages/employees/employees.component').then(
            (m) => m.EmployeesComponent
          ),
      },
      {
        path: 'clients',
        loadComponent: () =>
          import('./pages/clients/clients.component').then(
            (m) => m.ClientsComponent
          ),
      },
      {
        path: 'test',
        component: PopupAddColumnComponent,
      },
      {
        path: '',
        redirectTo: 'orders',
        pathMatch: 'full',
      },
    ],
  },
];
