import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TapCounterComponent } from './tap-counter/tap-counter.component';
import { DealerInventoryComponent } from './dealer-inventory/dealer-inventory.component';
import { PhotoGalleryComponent } from './photo-gallery/photo-gallery.component';
import { VehicleFormComponent } from './vehicle-form/vehicle-form.component';
import { VehicleFormReactiveComponent } from './vehicle-form-reactive/vehicle-form-reactive.component';

                                  // imported in AppModule, so part of application bundle
import  '@angular/common/locales/global/fr';
import  '@angular/common/locales/global/fr-CA';

@NgModule({
  declarations: [
    AppComponent,
    TapCounterComponent,
    DealerInventoryComponent,
    PhotoGalleryComponent,
    VehicleFormComponent,
    VehicleFormReactiveComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
