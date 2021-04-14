import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DealerInventoryComponent } from './dealer-inventory/dealer-inventory.component';
import { PhotoGalleryComponent } from './photo-gallery/photo-gallery.component';
import { VehicleFormComponent } from './vehicle-form/vehicle-form.component';
import { VehicleFormReactiveComponent } from './vehicle-form-reactive/vehicle-form-reactive.component';


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
    FormsModule,            // FormsModule and ReactiveFormsModule
    ReactiveFormsModule,    // can both be used in the same app
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }