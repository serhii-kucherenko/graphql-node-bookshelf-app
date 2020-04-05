import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BooksListComponent} from "./books-list.component";
import {BooksListItemComponent} from "./books-list-item/books-list-item.component";

@NgModule({
  declarations: [BooksListComponent, BooksListItemComponent],
  exports: [
    BooksListComponent
  ],
  imports: [
    CommonModule
  ]
})
export class BooksListModule { }
