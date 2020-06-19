import { Routes, RouterModule } from "@angular/router";
import { NgModule, Component } from '@angular/core';

import { AuthGuard } from '../../_helpers/auth.guard';


import { HandleProcessComponent } from './handle-process.component';
import { DetailHandleComponent } from './detail-handle/detail-handle.component';
import { MainLayoutComponent } from 'src/app/pages/main-page/layout.component';


const routes: Routes = [
    {
        path: '',
        component: MainLayoutComponent,
        //   canActivate: [AuthGuard],
        children: [
            // {
            //     path: '',
            //     redirectTo: 'list-process',
            //     pathMatch: 'full'
            // },
            {
                path: '',
                data:
                {
                    title: 'Danh sách quy trình cần xử lý',
                },
                component: HandleProcessComponent,

            },
            {
                path: ':id',
                component: DetailHandleComponent,

            }
        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class HandleProcessRoutingModule {

}