import { Component } from '@angular/core';
import './experiment-basics'
import './experiment-classes'
import './experiment-generics'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Goofy Goober';
}
