import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-subscription-form',
  templateUrl: './subscription-form.component.html',
  styleUrls: ['./subscription-form.component.css']
})
export class SubscriptionFormComponent implements OnInit {
                // expect to be passed our interests array
  @Input() interests:[string]

  constructor() { }

  ngOnInit() {
  }

}
