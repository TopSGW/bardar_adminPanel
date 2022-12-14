import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';
import { PermissionGuard } from '../../core/guards/permisson.guard';

const routes: Routes = [
    {
        path: 'list',
        component: ListComponent,

    },
    {
        path: 'detail/:id',
        component: DetailComponent,

    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class InvoicesRoutingModule {}
