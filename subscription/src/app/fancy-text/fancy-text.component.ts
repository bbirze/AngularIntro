import { Component } from '@angular/core';

@Component({               
    selector: "fancy-text",
    template: "<input type='text'/>",           // using inline template
    //styles: ["input[type='text'] { border-color:black; border-width:thin; border-radius:6px; height:20pt }"]
    styleUrls: ["./fancy-text.component.css"],

})

export class FancyText {
}