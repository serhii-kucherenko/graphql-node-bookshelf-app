import {Component, Input, OnInit} from '@angular/core';
import {Book} from "../../../types/book";

@Component({
  selector: 'app-books-list-item',
  templateUrl: './books-list-item.component.html',
  styleUrls: ['./books-list-item.component.scss']
})
export class BooksListItemComponent implements OnInit {
  @Input() public book: Book;

  constructor() { }

  ngOnInit(): void {
  }

}
