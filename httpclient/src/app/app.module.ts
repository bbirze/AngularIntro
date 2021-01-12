import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
                            // import HttpClientModule
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NewsListComponent } from './news-list/news-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NewsListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule        // make HttpClient service available
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
