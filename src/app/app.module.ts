import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PlayerComponent } from './player/player.component';
import { PlayerListComponent } from './player-list/player-list.component';
import { PlayerFormComponent } from './player-form/player-form.component';
import { QueryResultsComponent } from './query-results/query-results.component';

@NgModule({
  declarations: [
    AppComponent,
    PlayerComponent,
    PlayerListComponent,
    PlayerFormComponent,
    QueryResultsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
