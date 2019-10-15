import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-html-editor',
  templateUrl: './html-editor.component.html',
  styleUrls: ['./html-editor.component.css']
})
export class HtmlEditorComponent  {
  userInput = "<h3>This is Testing InnerHTML</h3>"

  constructor() { }

  updateHTML(newValue)  {
    console.log("HTML updated: %s", newValue)
    this.userInput = newValue
  }



}
