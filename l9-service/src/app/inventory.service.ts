import { Injectable } from '@angular/core';
import { Vehicle } from './vehicle';

//@Injectable()                         // Angular 5 way, let AppModule register us
@Injectable({
  providedIn: 'root'                    // register with the AppModule injector
})
export class InventoryService {

  // private inventory: Vehicle[] = []
// /*
   private inventory: Vehicle[] = [     // if want a mock.... 
    {
      VIN: "Y123",
      year: 2012,
      make: "HONDA",
      model: "Civic",
      mileage: 70000,
      price: 5900.00,
      featured: false,
      photos: []
    },
    {
      VIN: "P1023",
      year: 2019,
      make: "BMW",
      model: "328i",
      mileage: 42000,
      price: 12000.00,
      featured: true,
      photos: ["/assets/b-1.png", "/assets/b-2.png", "/assets/b-3.png", "/assets/b-4.png"]
    },
  ]
// */
 
  public addVehicle(v:Vehicle)  {             // C: Create
    this.inventory.push(v)
  }

  public getInventory() : Vehicle[] {         // R: Retrieve
    return this.inventory
  }
                                              // U: Update
  public updateVehicle(oldVIN:string, newVehicle:Vehicle)  {
    const oldVehicle = this.inventory.find(
      v=> v.VIN === oldVIN
    )

    if (oldVehicle != undefined)  {
      Object.assign(oldVehicle, newVehicle)
    }
  }
                                             // D: Delete
  public deleteVehicle(vehicleToDelete:Vehicle)  {
    this.inventory= this.inventory.filter(v => v.VIN !== vehicleToDelete.VIN)
  }


  constructor() { }
}
