import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '@app/features/home/home.component';

const routes: Routes = [
    { path: 'home', component: HomeComponent, data: { breadcrumb: 'Home'} },
    // { path: 'map', loadChildren: './features/map/map.module#MapModule' },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
