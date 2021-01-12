import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sport-subscibe',
  templateUrl: './sport-subscibe.component.html',
  styleUrls: ['./sport-subscibe.component.css']
})
export class SportSubscibeComponent implements OnInit {
  sports = [ "Volleyball", "Basketball", "Soccer" ]

  constructor() { }

  ngOnInit() {
  }

}
