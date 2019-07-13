import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NewsListComponent } from './news-list/news-list.component';
                                  // referenced, so will be prod app bundle
//import { NewsService } from './services/news.service';

@NgModule({
  declarations: [
    AppComponent,
    NewsListComponent             // uses the NewsService 
  ],
  imports: [
    BrowserModule
  ],
//  providers: [NewsService],     // Injectables go in the providers array
  providers: [],                  // Angular6 way, service dictates where registered
  bootstrap: [AppComponent]
})
export class AppModule { }
