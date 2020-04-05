import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

// Apollo Client
import {Apollo, ApolloModule} from "apollo-angular";
import { HttpLinkModule, HttpLink } from "apollo-angular-link-http";
import {InMemoryCache} from "apollo-cache-inmemory";

// Global Configs
import { environment } from '../environments/environment';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ApolloModule,
    HttpLinkModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private _apollo: Apollo, private _httpLink: HttpLink) {
    _apollo.create({
      link: _httpLink.create({ uri: environment.graphqlUri }),
      cache: new InMemoryCache()
    })
  }

}
