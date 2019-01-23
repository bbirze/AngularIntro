import {Directive, ElementRef, OnInit } from '@angular/core';

//  Add to app.module with
//       import of class  : import {ImportantTextDirective} from './importanttext.directive';
//       add to declarations: @NgModule({
//                                 declarations: [ ..., ImportantTextDirective]   
//                            })
//  Use directive in component template
//       @Component({        
//            selector: 'app-importantDirective ',
//            template: `<p appImportant>Awesome Deal!</p>  `
//       })
@Directive({
   selector: '[appImportant]'
})
export class ImportantTextDirective implenments OnInit {
   
   constructor(private el:ElementRef)  {}    // inject ElementRefvin constructor

   ngOnInit()  {
      this.el.nativeElement.style.fontWeight = "bold"
      this.el.nativeElement.style.color = "red"
   }
}