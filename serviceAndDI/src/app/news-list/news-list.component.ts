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

  constructor(private newsSvc:NewsService) {      // service injected into field newsSvc field
    this.selectedNewsId = 0                       // no "real" work done in constructor
   }

  ngOnInit() {                                    // do "real" work in ngOnInit
    this.newsItems = this.newsSvc.getNewsItems()  // used injected field newsSvc
  }                                               // to populate our newsItem field
 
  expandNews(id:number)  {
    this.selectedNewsId = id
    return false
  }

}
