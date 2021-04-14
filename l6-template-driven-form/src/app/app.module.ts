import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DealerInventoryComponent } from './dealer-inventory/dealer-inventory.component';
import { PhotoGalleryComponent } from './photo-gallery/photo-gallery.component';
import { VehicleFormComponent } from './vehicle-form/vehicle-form.component';

@NgModule({
  declarations: [
    AppComponent,
    DealerInventoryComponent,
    PhotoGalleryComponent,
    VehicleFormComponent            // new child component
  ],
  imports: [
    BrowserModule,
    FormsModule,                    // make template forms available to our templates
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
