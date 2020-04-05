import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { BookService } from "../../services/book.service";
import { Book } from "../../types/book";
import { Observable } from "rxjs";

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.scss']
})
export class BooksListComponent implements OnInit, OnChanges {
  @Input() private _search: String;

  public books: Observable<Book[]>;

  constructor(private _bookService: BookService) { }

  public ngOnInit(): void {
    this.books = this._bookService.getBooks(this._search);
  }

  public ngOnChanges(): void {
    this.books = this._bookService.getBooks(this._search);
  }

}
