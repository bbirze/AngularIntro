import { Component, OnInit } from '@angular/core';
import { Vehicle } from '../vehicle'
import { InventoryService } from '../inventory.service'

@Component({
  selector: 'app-dealer-inventory',
  templateUrl: './dealer-inventory.component.html',
  styleUrls: ['./dealer-inventory.component.css']
})
export class DealerInventoryComponent implements OnInit {
   
  inventory:Vehicle[] = []
  vehicleToEdit:Vehicle = undefined
                                            // Inject the InventoryService
  constructor(private inventorySvc:InventoryService) {}

  ngOnInit(): void {                        // use service to populate inventory
    this.inventory = this.inventorySvc.getInventory()
  }

  addVehicle(v:Vehicle)  {                  // C: Create
    this.inventorySvc.addVehicle(v)
                                            // R: Retrieve
    this.inventory = this.inventorySvc.getInventory()
  }
  
  commitEdit(v:Vehicle)  {                  // U: Update
    this.inventorySvc.updateVehicle(this.vehicleToEdit.VIN, v)
    this.inventory = this.inventorySvc.getInventory()

    this.vehicleToEdit = undefined
  }

  deleteVehicle(car:Vehicle) {              // D: Delete
    this.inventorySvc.deleteVehicle(car)
    this.inventory = this.inventorySvc.getInventory()
  }

  beginEditing(v:Vehicle)  {
    this.vehicleToEdit = v
    console.log(`in dealerInventory.beginEdit() event handler with vehicle to edit: ${this.vehicleToEdit}`)
  } 
  cancelEdit()  {
    console.log(`in dealerInventory.cancelEdit() event handler with vehicle to edit: ${this.vehicleToEdit}`)
    this.vehicleToEdit = undefined
  }

  handlePhotoNavigation(photoIndex:number, car:Vehicle)  { 
    if(photoIndex == car.photos.length-1)  {
      alert('Come visit us in our showroom Soon!')
    }
  } 
  
  trackByVIN(index:number, car:Vehicle) :string {
    return car.VIN
  }




}
