import { Component } from '@angular/core';

@Component({               
    selector: "fancy-text",
    template: "<input type='text'/>",           // using inline template and CSS declaration
    styles: [`input[type='text'] {
              border-color:black; 
              border-width:thin; 
              border-radius:6px;
              height:20pt }`
            ]
    // styleUrls: ["./fancy-text.component.css"],   // external CSS
})
export class FancyText {
}