import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { TablesComponent } from '../../pages/tables/tables.component';
import { GestionCommandesComponent } from 'src/app/pages/gestion-commandes/gestion-commandes.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'tables',         component: TablesComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent },
    {
        path: 'gestion-commandes',
        component:  GestionCommandesComponent,
        children: [
          {
            path: '',
            loadChildren: '../../pages/gestion-commandes/gestion-commandes.module#GestionCommandesModule'
          }
        ]
      },

];
