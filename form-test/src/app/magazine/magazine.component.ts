import { Component, OnInit } from '@angular/core';

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
  
  // create requestData object as collection of our property value 
  //     these were set with [(ngModel)] 2-way binding
  //     can then display the requestData with an alert
  //
  submitForm() {
    let requestData = {
      customerName: this.fullName,
      productCode : this.selectedEdition.editionCode,
      acceptPolicy: this.acceptPolicy,
      shipMode    : this.selectedShipping
    }
    alert(JSON.stringify(requestData))
  }
  constructor() { }

  ngOnInit() {
  }

}
