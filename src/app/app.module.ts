import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopStoriesComponent } from './top-stories/top-stories.component';
import { NewStoriesComponent } from './new-stories/new-stories.component';
import{HttpClientModule} from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    TopStoriesComponent,
    NewStoriesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
