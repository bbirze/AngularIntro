import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import Every Component we have a route to
// Available because declared in our root module
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { NewsComponent } from './news/news.component';

const routes: Routes = [
  { path: '', component: HomeComponent },     // the Home startup page
  { path: 'about', component: AboutComponent },
  { path: 'news',  component: NewsComponent }, 
  { path: '**', component: HomeComponent },   // wildcard for 404 situations
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],    // set routes on import
  exports: [RouterModule]                     // export so available to app.module
})
export class AppRoutingModule {}
