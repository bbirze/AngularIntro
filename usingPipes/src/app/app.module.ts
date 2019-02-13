import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NewsListComponent } from './news-list/news-list.component';
import { NewsSearchPipe } from './news-list/news-search.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NewsListComponent,
    NewsSearchPipe            // Declare so available to rest of app
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
