import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

// Apollo Client
import {Apollo, APOLLO_OPTIONS, ApolloModule} from "apollo-angular";
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
  bootstrap: [AppComponent],
  providers: [{
    provide: APOLLO_OPTIONS,
    useFactory: (httpLink: HttpLink) => {
      return {
        cache: new InMemoryCache(),
        link: httpLink.create({
          uri: environment.graphqlUri
        })
      }
    },
    deps: [HttpLink]
  }],
})
export class AppModule {}
