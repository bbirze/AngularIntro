import { Component, OnInit } from '@angular/core';
                                    // input reactive form classes
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-magazine',
  templateUrl: './magazine.component.html',
  styleUrls: ['./magazine.component.css']
})
export class MagazineComponent implements OnInit {
  editions = [
    {editionCode: 1, edditionName: "US", price: "10.99 USD" },
    {editionCode: 2, edditionName: "Canada", price: "14.99 CAD" },
    {editionCode: 3, edditionName: "International", price: "23.99 USD" },
  ]

  magazineForm = new FormGroup({      // Used in <form> directive: [formGroup]="magazineForm"
                                      // array not required if only one validator
  //fullName: new FormControl('', [Validators.required]),
    fullName: new FormControl('', Validators.required),     
    selectedEdition: new FormControl(this.editions[0]),   // set iniital value
    selectedShipping: new FormControl(),
    acceptPolicy: new FormControl(false),                 // set iniital value
  })

  submitForm() {                        // get form control values from form 
    let requestData = this.magazineForm.value
    alert(JSON.stringify(requestData))
  }

  /*
    individual properties no longer needed, name and value of each
    input is kept in the FormControl object.
  */
  // fullName = ""
  // selectedEdition = this.editions[0] //Choose US by default
  // selectedShipping = ""
  // acceptPolicy = false
  
  constructor() { }

  ngOnInit() {
  }

}
