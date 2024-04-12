import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { PickDetails, PlayerPick } from '../Interfaces/PlayerPick';
import { NgbAccordionConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-player-picks',
  templateUrl: './player-picks.component.html',
  styleUrls: ['./player-picks.component.css']
})
export class PlayerPicksComponent {
  players: { player: string }[] = [];
  playerPicks: { [key: string]: PickDetails[] } = {};

  constructor(private http: HttpClient, config: NgbAccordionConfig) {
    config.closeOthers = true;
    config.type = 'info';
  }

  ngOnInit(): void {
    this.http.get<any[]>('/assets/playersPicks.json').subscribe(data => {
      this.players = data;
      for (const player of data) {
        const picks: PickDetails[] = [];
        for (let i = 1; i <= 5; i++) {
          picks.push(player[`Pick${i}`]);
        }
        this.playerPicks[player.player] = picks;
      }
    });
  }

  getTotalScore(picks: PickDetails[]): number {
    let totalScore = 0;
    for (const pick of picks) {
      console.log(pick)
      totalScore = pick.Day1Score + pick.Day2Score + pick.Day3Score + pick.Day4Score
      if (pick.MissedCut) {
        totalScore += 5;;
      }
    }
    return totalScore;
  }
}
