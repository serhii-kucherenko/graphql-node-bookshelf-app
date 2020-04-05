import { Component, Input } from '@angular/core';
import { Book } from "../../../types/book";
import { BookService } from "../../../services/book.service";

@Component({
  selector: 'app-books-list-item',
  templateUrl: './books-list-item.component.html',
  styleUrls: ['./books-list-item.component.scss']
})
export class BooksListItemComponent {
  @Input() public book: Book;

  constructor(public bookService: BookService) {}

  public like(): void {
    this.bookService.like(this.book.id).subscribe();
  }

  public dislike(): void {
    this.bookService.dislike(this.book.id).subscribe();
  }
}
