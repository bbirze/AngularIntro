import { Component, OnInit } from '@angular/core';
import { Vehicle } from '../vehicle'

@Component({
  selector: 'app-dealer-inventory',
  templateUrl: './dealer-inventory.component.html',
  styleUrls: ['./dealer-inventory.component.css']
})
export class DealerInventoryComponent implements OnInit {
 
  vehicleToEdit:Vehicle = undefined

  beginEditing(v:Vehicle)  {
    this.vehicleToEdit = v
    console.log(`in dealerInventory.beginEdit() event handler with vehicle to edit: ${this.vehicleToEdit}`)
  } 

  commitEdit(v:Vehicle)  {
    console.log(`in dealerInventory.commitEdit() event handler with vehicle to edit: ${this.vehicleToEdit}`)
    Object.assign(this.vehicleToEdit, v)    // copy the edited data
    
    this.vehicleToEdit = undefined
  }

  cancelEdit()  {
    console.log(`in dealerInventory.cancelEdit() event handler with vehicle to edit: ${this.vehicleToEdit}`)
    this.vehicleToEdit = undefined
  }

  addVehicle(v:Vehicle)  {
    console.log(`in dealerInventory.addVehicle() event handler with vehicle: ${v}`)
    this.inventory.push(v)
  }
 
  handlePhotoNavigation(photoIndex:number, car:Vehicle)  { 
    if(photoIndex == car.photos.length-1)  {
      alert('Come visit us in our showroom Soon!')
    }
  } 
  
  trackByVIN(index:number, car:Vehicle) :string {
    return car.VIN
  }

  deleteVehicle(car:Vehicle) {
    this.inventory = this.inventory.filter(c=>c.VIN != car.VIN)
  }

  constructor() {}

  ngOnInit(): void {
  }
  
  inventory:Vehicle[] = [
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
    {
      VIN: "NM182",
      year: 2018,
      make: "KIA",
      model: "Niro",
      mileage: 31000,
      price: 7900.00,
      featured: false,
      photos: ["/assets/k-1.png", "/assets/k-2.png", "/assets/k-3.png"]

    },
    {
      VIN: "Y187",
      year: 2014,
      make: "HONDA",
      model: "Accord",
      mileage: 40000,
      price: 8900.00,
      featured: false,
      photos: []
    },
  ]



}
