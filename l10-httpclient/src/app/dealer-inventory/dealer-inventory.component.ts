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

  constructor(private inventorySvc:InventoryService) {}

  ngOnInit(): void {
    this.inventorySvc.getInventory()
       .subscribe(list => this.inventory = list)
  }

  addVehicle(v:Vehicle)  {
    this.inventorySvc.addVehicle(v).subscribe(() => {
      this.inventory.push(v)
    })
  }
 
  deleteVehicle(car:Vehicle) {
    this.inventorySvc.deleteVehicle(car)
    .subscribe(() => {             // update local copy of the list
        this.inventory = this.inventory.filter(v => v.VIN !== car.VIN)
     })
   }
  
  commitEdit(v:Vehicle)  {
    this.inventorySvc.updateVehicle(this.vehicleToEdit.VIN, v)
    .subscribe(() => {
      Object.assign(this.vehicleToEdit, v)
      this.vehicleToEdit = undefined
    })
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
