import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { DealerInventoryComponent } from './dealer-inventory/dealer-inventory.component';
import { PhotoGalleryComponent } from './photo-gallery/photo-gallery.component';
import { VehicleFormComponent } from './vehicle-form/vehicle-form.component';
import { VehicleFormReactiveComponent } from './vehicle-form-reactive/vehicle-form-reactive.component';

                                  // Locals imported in AppModule, soaccessable to rest of app
import  '@angular/common/locales/global/fr';          // import French locale
import  '@angular/common/locales/global/fr-CA';       // import Fench Canadian locale

@NgModule({
  declarations: [
    AppComponent,
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
