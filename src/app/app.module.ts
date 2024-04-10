import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlayersOddsComponent } from './PlayersOdds/PlayersOdds.component';
import { HttpClientModule } from '@angular/common/http';
import { SelectFantasyTeamComponent } from './select-fantasy-team/select-fantasy-team.component';
import { FormsModule } from '@angular/forms';
import { SubmittedDataComponent } from './submitted-data/submitted-data.component';

@NgModule({
  declarations: [
    AppComponent,
      PlayersOddsComponent,
      SelectFantasyTeamComponent,
      SubmittedDataComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
