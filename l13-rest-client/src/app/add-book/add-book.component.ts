import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService, Book } from '../data.service'

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {
  book:Book = new Book

  addBook() {
    console.log(`addBook ${this.book.isbn} ${this.book.title} ${this.book.price}`)
    this.dataService.saveBook(this.book).subscribe(_ =>  {
                  // Go back to the home page
      this.router.navigate(['/'])
    })
  }

  constructor(private dataService: DataService, private router:Router) {}

  ngOnInit(): void {
  }

}
