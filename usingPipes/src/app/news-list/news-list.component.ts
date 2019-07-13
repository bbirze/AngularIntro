import { Component, OnInit } from '@angular/core';
import { NewsService, News } from '../common/news.service';
// only using news-serarch.pipe in template, so don't need to import it
//         component code stays clean!

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css']
})
export class NewsListComponent implements OnInit {
  selectedNewsId:number
  newsItems : News[] = []
  searchText : string         // new search text input prop
 
  expandNews(id:number)  {
    this.selectedNewsId = id
    return false
  }

  constructor(private newsSvc:NewsService) {
    this.selectedNewsId = 0
   }

  ngOnInit() {
    this.newsSvc.getNewsItems().subscribe(response => {
      this.newsItems = response
    },
    error => {
      alert("Sorry, there was a problem getting data.")
    })
  }

}
