import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { NewsComponent } from './news/news.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'news', component: NewsComponent }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],    // set routes on import
  exports: [RouterModule]                     // export so available to app.module
})
export class AppRoutingModule { }
