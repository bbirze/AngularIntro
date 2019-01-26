import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NewsListComponent } from './news-list/news-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NewsListComponent             // uses the NewsService 
  ],
  imports: [
    BrowserModule
  ],
  providers: [],                  // Injectables go in the providers array
  bootstrap: [AppComponent]
})
export class AppModule { }
