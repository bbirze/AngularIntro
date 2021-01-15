import { Component, OnInit, Input, Output, EventEmitter,  } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Vehicle } from '../vehicle';

function validate_VIN(control:FormControl) {
  const banned = [ 'I', 'O', 'Q']

  if (banned.some(str => control.value.includes(str))) {
    return { error: 'Must not contain I, O, or Q'}
   } else {
     return null      // all good
   }
}

@Component({
  selector: 'app-vehicle-form-reactive',
  templateUrl: './vehicle-form-reactive.component.html',
  styleUrls: ['./vehicle-form-reactive.component.css']
})
export class VehicleFormReactiveComponent implements OnInit {

  vehicalForm:FormGroup 
  @Input() vehicle = new Vehicle("", 0, "", "", 0, 0, false, [])
  @Output("on-submit") emitter = new EventEmitter

  constructor() { }

  ngOnInit(): void {
    console.log("instantiating this.vehicalForm")
    this.vehicalForm = new FormGroup({
      veh_vin: new FormControl(                 // if >1 validaor, put in an array
            this.vehicle.VIN, [Validators.minLength(3), Validators.required, validate_VIN]),
      veh_year: new FormControl(                // no array needed for only 1 validator
            this.vehicle.year, Validators.required),
      veh_make: new FormControl(                
            this.vehicle.make, Validators.required),
      veh_model: new FormControl(                
            this.vehicle.model, Validators.required),
      veh_mileage: new FormControl(                
            this.vehicle.mileage, Validators.required),
      veh_price: new FormControl(                
            this.vehicle.price, Validators.required),
      veh_featured: new FormControl(                
            this.vehicle.featured, Validators.required),  
    })
  }

  handleSubmit()  {
    const input = this.vehicalForm.value
    const v = new Vehicle(
      input.veh_vin,
      input.veh_year,
      input.veh_make,
      input.veh_model,
      input.veh_mileage,
      input.veh_price,
      input.veh_featured === "" ? false : input.veh_featured,
      [])

      this.emitter.emit(v)
  }


}
