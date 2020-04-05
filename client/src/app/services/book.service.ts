import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { map, filter } from 'rxjs/operators';

import { Query, Book } from "../types/book";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BookService {
  constructor(private _apollo: Apollo) { }

  public getBooks(search: String): Observable<Book[]> {
    return this._apollo.watchQuery<Query>({
      pollInterval: 500,
      query: gql`
        query books($search: String) {
         books(search: $search) {
           id,
           title,
           description,
           author,
           rating
         }
        }
      `,
      variables: {
        search
      }
    }).valueChanges.pipe(
      map(({ data }) => data.books)
    )
  }

  public like(id: String): Observable<Book> {
    return this._apollo.mutate({
      mutation: gql`
        mutation like($id: String!) {
          like(id: $id) {
            id,
            title,
            description,
            author,
            rating
          }
        }
      `,
      variables: {
        id
      }
    }).pipe( map((({ data }) => (data as { book: Book}).book )));
  }

  public dislike(id: String): Observable<Book> {
    return this._apollo.mutate({
      mutation: gql`
        mutation dislike($id: String!) {
          dislike(id: $id) {
            id,
            title,
            description,
            author,
            rating
          }
        }
      `,
      variables: {
        id
      }
    }).pipe( map((({ data }) => (data as { book: Book}).book )));
  }
}
