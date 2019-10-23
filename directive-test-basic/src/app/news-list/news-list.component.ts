import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css']
})
export class NewsListComponent implements OnInit {
  selectedNewsId:number   // which news item is selected

  expandNews(id:number)  {
    this.selectedNewsId = id
    return false          // tell browser not to follow link 
  }                       // otherwise would reload page
  constructor() {}
  ngOnInit()    {}
}
