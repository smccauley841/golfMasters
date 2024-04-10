import { Component } from '@angular/core';
import { OddsService } from '../services/OddsService.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-select-fantasy-team',
  templateUrl: './select-fantasy-team.component.html',
  styleUrls: ['./select-fantasy-team.component.css']
})
export class SelectFantasyTeamComponent {
  selectedItem: string = '';
  selectedItem1: string = '';
  selectedItem2: string = '';
  selectedItem3: string = '';
  selectedItem4: string = '';
  selectedGroupItems: string[] = [];
  items: any[] = [];

  showChildComponent: boolean = false;

  constructor(private oddsService: OddsService, private router: Router) { }

  ngOnInit(): void {
    this.oddsService.getOdds().subscribe((data: any[]) => {
      this.items = data;
    });
  }

  filterByGroup(group: string): any[] {
    return this.items.filter(item => item.group === group);
  }

  onSubmit(): void {
    const playerPick = {
      selectedItem: this.selectedItem,
      selectedGroupItems: [this.selectedItem1, this.selectedItem2, this.selectedItem3, this.selectedItem4]
    };
    this.selectedGroupItems.push(this.selectedItem1, this.selectedItem2, this.selectedItem3, this.selectedItem4);

    this.showChildComponent = true;
  }
}

