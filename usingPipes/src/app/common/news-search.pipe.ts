import { Pipe, PipeTransform } from '@angular/core'
import { News } from './news.service'

@Pipe({
    name: 'newsSearch'
})
export class NewsSearchPipe implements PipeTransform {

    transform(sourceList: News[], searchText: string) : News[] {
        if (searchText === undefined || searchText.length ==0)  {
            return sourceList                       // no search term given
        }  

        let reg = new RegExp(searchText, 'i')       // i flag means ignore case

        return sourceList.filter(news =>
              news.title.search(reg) >=0 || news.body.search(reg) >=0) 
    }
}