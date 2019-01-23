import { Component, OnInit } from '@angular/core';

@Component({        // attach meta-data to class LoginComponent
  selector: 'app-login ',
  template: `  <!--  login.component.html   -->
  <h2>Please   Log  In</h2>
  <p>Name:<br/>
  <input type="text"   [(ngModel)]="name"/></p>
  <p>Password:<br/>
  <input type="password"  [(ngModel)]="password"/></p>
  <p>{{message}}</p>
  <button (click)="submit()">Submit</button>
  `,
  styles: [`h1{color:red}`]
})
export class LoginComponent implements OnInit {
  name:string;
	password:string;
	message:string   =  "Please   enter  your   login   details.";
  
  submit(){
    this.message  =  this.name   +   "  is   now   logged   in!"
  };

  constructor() {}
  ngOnInit()  {}
}
