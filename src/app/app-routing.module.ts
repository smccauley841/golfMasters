import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubmittedDataComponent } from './submitted-data/submitted-data.component';
import { SelectFantasyTeamComponent } from './select-fantasy-team/select-fantasy-team.component';
import { PlayersOddsComponent } from './PlayersOdds/PlayersOdds.component';

const routes: Routes = [
  { path: 'playerOdds', component: PlayersOddsComponent },
  { path: 'pickTeam', component: SelectFantasyTeamComponent },
  { path: '', component: PlayersOddsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
