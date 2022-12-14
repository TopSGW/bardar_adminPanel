import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserlistComponent } from './userlist/userlist.component';
import { UsergridComponent } from './usergrid/usergrid.component';
import { ProfileComponent } from './profile/profile.component';
import { PermissionGuard } from '../../core/guards/permisson.guard';

const routes: Routes = [
    {
        path: 'list',
        component: UserlistComponent,

    },
    {
        path: 'grid',
        component: UsergridComponent,
        canActivate: [PermissionGuard]

    },
    {
        path: 'profile',
        component: ProfileComponent,
        canActivate: [PermissionGuard]

    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ContactsRoutingModule { }
