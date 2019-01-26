import { Component, Input } from '@angular/core';

@Component({
    selector: "fancy-checkbox",
    styleUrls: ["./fancy-checkbox.component.css"],
    template: "<label><input type='checkbox'/><span></span>{{label}}</label>"
})
export class FancyCheckbox {
    // @Input used to pass values from parent to child
    //   Here subscription-form’s template is passing down the label property.
    //   This is a form of data binding we'll see later...
    @Input() label: string
}