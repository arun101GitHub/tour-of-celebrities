import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CelebritiesComponent } from './celebrities/celebrities.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CelebrityDetailComponent } from './celebrity-detail/celebrity-detail.component';
const routes: Routes = [
  { path: 'celebrities', component: CelebritiesComponent},
  { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'detail/:id', component: CelebrityDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
