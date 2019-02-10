import { Directive, HostBinding, Input } from '@angular/core';
// @HostBinding:  set properties on the directives's Host element or component 
//                e.g. @HostBinding('src') imageSrc
//
// @HostListener: listen for events on the directive's Host element or component
//                e.g. @HostListener(click)

@Directive({
  selector: '[appCcLogo]'
})
export class CcLogoDirective {
  // our Host is the <img> DOM element
  @HostBinding('src') imageSrc
  @HostBinding('hidden') isHidden:boolean
  @Input() ccNumber: string=""

  getCCType() : string {
    if (this.ccNumber.startsWith("4"))  {
      return "visa"
    } else if (this.ccNumber.startsWith("5"))  {
      return "mastercard"
    } else if (this.ccNumber.startsWith("3"))  {
      return "amex"
    } 
    return undefined
  }

  // called whenever bound prop ccNumber changes
  ngOnChanges() {     
    const ccType = this.getCCType()
    this.isHidden = ccType == undefined
    if (!this.isHidden)  {
      this.imageSrc = `assets/${ccType}.png`
    }
  }

  constructor() {}    // use @HostBinding for selected DOM elements
                      // instead of injecting ElementRef in constructor

}
