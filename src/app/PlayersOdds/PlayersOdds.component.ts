import { Component, OnInit } from '@angular/core';
import { OddsService } from '../services/OddsService.service';

@Component({
  selector: 'app-PlayersOdds',
  templateUrl:'./PlayersOdds.component.html',
  styles: []
})
export class PlayersOddsComponent implements OnInit {
  outcomes: { name: string, price: string, group: string }[] = [];

  constructor(private oddsService: OddsService) { }

  ngOnInit(): void {
    this.oddsService.getOdds().subscribe((data: any[]) => {
      data.forEach(item => {
        this.outcomes.push({ name: item.name, price: item.price, group: item.group });
      })
    })
    };

    filterByGroup(groupName: string): { name: string, price: string }[] {
      return this.outcomes.filter(item => item.group === groupName);
    }
}

