import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {
  greeting = "Please click the button below"

  showGreeting() {
    this.greeting = "Hello there!"
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
