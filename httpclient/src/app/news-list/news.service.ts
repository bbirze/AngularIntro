import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export class News {
    title: string
    body: string
}

@Injectable({
    providedIn: 'root'
})
export class NewsService {
    constructor(private httpClient:HttpClient) {}
 
    // use safe typing on Observable using generics
    // get returns an Observable which will return
    // to subscribers an array of News objects 
    //
    getNewsItems() : Observable<News[]> {
        return this.httpClient.get<News[]>('/assets/news_data.json')
    }
}
