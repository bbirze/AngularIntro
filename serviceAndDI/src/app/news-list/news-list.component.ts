import { Component, OnInit } from '@angular/core';
import { NewsService, News } from './news.service';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css']
})
export class NewsListComponent implements OnInit {
  selectedNewsId:number
  newsItems : News[] = []
 
  expandNews(id:number)  {
    this.selectedNewsId = id
    return false
  }

  constructor(private newsSvc:NewsService) {      // service injected into field newsSvc
    this.selectedNewsId = 0
   }

  ngOnInit() {                                    // used injected field newsSvc
    this.newsItems = this.newsSvc.getNewsItems()  
  }

}
