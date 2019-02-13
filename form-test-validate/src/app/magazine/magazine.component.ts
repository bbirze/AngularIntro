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

  // submitForm arg theForm references ngForm
  // ngForm creates a top-level FormGroup instance and binds it 
  //        to a form DOM node
  //        so to get the form object, need to use the theForm.form property
  //
  submitForm(theForm) {
                                        // get values from theForm template variable
    console.log(`Form Values: ${JSON.stringify(theForm.form.value)}`)
                                        // OR get values component properties
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
