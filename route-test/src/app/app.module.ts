import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// this is the new AppRoutingModule CLI created for us
//     it has the Routes table in it
import { AppRoutingModule } from './app-routing.module';

// Import our developed components and declare them
// makes them availabe to AppRoutingModule
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { NewsComponent } from './news/news.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    NewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule        // Brings AppRoutingModule in as sub-module
  ],                        // AppRoutingModule does its own exports
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
