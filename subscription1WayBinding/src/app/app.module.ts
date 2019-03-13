import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FancyText } from './fancy-text/fancy-text.component';
import { FancyCheckbox } from './fancy-checkbox/fancy-checkbox.component';
import { SubscriptionFormComponent } from './subscription-form/subscription-form.component';
import { PlayerSubscribeComponent } from './player-subscribe/player-subscribe.component';
import { SportSubscibeComponent } from './sport-subscibe/sport-subscibe.component';

@NgModule({
  declarations: [
    AppComponent,
    FancyText,
    FancyCheckbox,
    SubscriptionFormComponent,
    PlayerSubscribeComponent,
    SportSubscibeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
