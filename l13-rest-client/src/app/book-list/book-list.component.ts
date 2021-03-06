import { Component, OnInit } from '@angular/core';
import { DataService, Book } from '../data.service'

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  books:Book[] = []
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getBooks().subscribe(bookList => {
      this.books = bookList
    })
  }

  deleteBook(book: Book)  {
    if (!window.confirm('Are you sure you want to delete this item?'))  {
      return
    }

    this.dataService.deleteBook(book.isbn).subscribe(_ =>  {
                // delete local copy of book in this.books
      this.books = this.books.filter(b => b.isbn !== book.isbn)
    })
  }

}
