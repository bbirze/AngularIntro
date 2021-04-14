import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tap-counter',
  templateUrl: './tap-counter.component.html',
  styleUrls: ['./tap-counter.component.css']
})
export class TapCounterComponent implements OnInit {
  tapCount = 0

  handleClick() {
    this.tapCount +=1
  }

  constructor() { 
    console.log(`Creating TapCounterComponent instance ${this}!`)
   }

  ngOnInit(): void {
    console.log(`ngOnInit() for TapCounterComponent ${this}!`)
  }

}
