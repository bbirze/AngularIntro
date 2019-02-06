import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <h3>Register for our Newsletter!</h3>
  <input type = "text" [(ngModel)]="email" />
  <button (click)="registerEmail()">Subscribe</button>
  <p>{{message}}</p>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  email: string
  message = "Enter email and hit 'Subscribe'."
  
  registerEmail() {
    this.message = this.email + " is now subscribed!";
  }
}
