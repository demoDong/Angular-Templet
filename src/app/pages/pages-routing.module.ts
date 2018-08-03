import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { PagesComponent } from './pages.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [{
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'nav',
    component: NavComponent,
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: '**',
    component: HomeComponent,
  }],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
