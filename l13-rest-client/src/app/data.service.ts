import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'

export class Book  {
  isbn: string
  title: string
  price: number
}

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  /* No baseRef used!  We are talking to our Dev Server
  *  on port 4200, who is forwarding request to the 
  *  Book Server as a reverse proxy 
  */
  getBooks(): Observable<Book[]>  {
    return this.http.get<Book[]>(`/books/`)
  }

  getBook(isbn: string): Observable<Book>  {
    return this.http.get<Book>(`/books/${isbn}`)
  }

  deleteBook(isbn: string): Observable<any>  {
    return this.http.delete(`/books/${isbn}`)
  }

  saveBook(book: Book): Observable<any>  {
    return this.http.put(`/books/${book.isbn}`, book)
  }
}
