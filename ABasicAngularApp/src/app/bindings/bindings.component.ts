import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bindings',
  template: `
    <h4>String Value</h4>
    <p>There are {{days}} {{unit}} in a year! </p>
    <h4>Date Value</h4> 
    <p>{{today|date: 'MM/dd/yy}}</p>
    <h4>Paragraph Value</h4>  
    <p>{{text}}</p>
    `,
  styleUrls: ['./bindings.component.css']
})
export class BindingsComponent implements OnInit {
  text: string = 'Lorem ipsum dlor sit amet, consecteturadipiscing elit.'
  days: number = 365
  unit: string  = "days"
  today: Date = new Date()

  constructor() { }

  ngOnInit() {
  }

}
