import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ParentComponent } from './parent/parent.component';
import { PullrequestComponent } from './pullrequest/pullrequest.component';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    PullrequestComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
