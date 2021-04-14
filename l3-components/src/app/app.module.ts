import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
                                    // notice located in tap-counter folder
import { TapCounterComponent } from './tap-counter/tap-counter.component';
@NgModule({
  declarations: [
    AppComponent,
    TapCounterComponent             // added to AppModule declarations array
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
