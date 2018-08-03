import { NgModule } from '@angular/core';
import { ThemeModule } from 'app/@theme/theme.module';
import { PagesRoutingModule } from './pages-routing.module';
import { DoEChartsModule } from '../shared/do-echarts/do-echarts.module';
import { PagesComponent } from './pages.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
const PAGES_COMPONENTS = [
  PagesComponent,
  HomeComponent,
  NavComponent,
];

@NgModule({
  imports: [
    ThemeModule,
    PagesRoutingModule,
    DoEChartsModule,
  ],
  declarations: [
    ...PAGES_COMPONENTS,
  ],
})
export class PagesModule {
}
