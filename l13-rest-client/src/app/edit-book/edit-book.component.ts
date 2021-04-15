import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService, Book } from '../data.service'

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit {

  book:Book
 
  constructor(private dataService: DataService, 
              private activeRoute: ActivatedRoute,
              private router:Router) { }

  ngOnInit(): void {                    // subscribe to params for route parameter
    this.activeRoute.paramMap.subscribe(params => {
      let isbn = params.get('isbn')     // retrieve ISBN # from path parameter
                                        // fetch the book by ISBN
      this.dataService.getBook(isbn).subscribe(book =>  {
        this.book = book
      })
    })
  }  //  NEED onDestroy to unsubscribe

  updateBook()  {
    this.dataService.saveBook(this.book).subscribe(_ => {                              
      this.router.navigate(['/'])       // Go back to the home page
    })
  }

}
