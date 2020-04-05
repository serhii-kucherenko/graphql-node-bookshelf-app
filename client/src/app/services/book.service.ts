import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { map } from 'rxjs/operators';

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
        query Books($search: String) {
         books(search: $search) {
           id,
           title,
           description,
           author,
           coverImageLink,
           likes
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

  public like(id: String) {
    return this._apollo.mutate({
      mutation: gql`
        mutation like($id: String!) {
          like(id: $id) {
            id,
            title,
            description,
            author,
            coverImageLink,
            likes
          }
        }
      `,
      variables: {
        id
      }
    });
  }

  public dislike(id: String) {
    return this._apollo.mutate({
      mutation: gql`
        mutation dislike($id: String!) {
          dislike(id: $id) {
            id,
            title,
            description,
            author,
            coverImageLink,
            likes
          }
        }
      `,
      variables: {
        id
      }
    });
  }
}
