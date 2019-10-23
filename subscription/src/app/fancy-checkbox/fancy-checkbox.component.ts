import { Component, Input } from '@angular/core';

@Component({
    selector: "fancy-checkbox",
    styleUrls: ["./fancy-checkbox.component.css"],
    //template: "<label><input type='checkbox'/><span></span>{{label}}</label>"
    // use template string so can use <CR> inside string!
    template: `
    <label>
        <input type='checkbox'/>
        <span></span>{{myLabel}}
    </label>`
})
export class FancyCheckbox {
    @Input() myLabel: string
}