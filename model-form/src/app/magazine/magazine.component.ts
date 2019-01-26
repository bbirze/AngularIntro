import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-magazine',
  templateUrl: './magazine.component.html',
  styleUrls: ['./magazine.component.css']
})
export class MagazineComponent implements OnInit {
  fullName = ""
  editions = [
    {editionCode: 1, edditionName: "US", price: "10.99 USD" },
    {editionCode: 2, edditionName: "Canada", price: "14.99 CAD" },
    {editionCode: 3, edditionName: "International", price: "23.99 USD" },
  ]
  selectedEdition = this.editions[0]    // choose US as default
  selectedShipping = ""
  acceptPolicy = false

  magazineForm = new FormGroup({
    fullName: new FormControl('', [Validators.required]),
    selectedEdition: new FormControl(this.editions[0]),
    selectedShipping: new FormControl(''),
    acceptPolicy: new FormControl(false),
  })

  submitForm() {
    let requestData = this.magazineForm.value
    alert(JSON.stringify(requestData))
  }

  constructor() { }

  ngOnInit() {
  }

}
