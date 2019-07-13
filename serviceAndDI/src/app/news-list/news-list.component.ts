import { Component, OnInit } from '@angular/core';
import { NewsService, News } from '../services/news.service';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css']
})
export class NewsListComponent implements OnInit {
  selectedNewsId:number
  newsItems : News[] = []                         // typed array, only hold News instances
 
  expandNews(id:number)  {
    this.selectedNewsId = id
    return false
  }
                                                  // no work done in constructor
  constructor(private newsSvc:NewsService) {      // service injected into field newsSvc field
    this.selectedNewsId = 0
   }
                                                  // do work in ngOnInit
  ngOnInit() {                                    // used injected field newsSvc
    this.newsItems = this.newsSvc.getNewsItems()  // to populate our newsItem field
  }

}
