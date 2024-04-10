import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-submitted-data',
  templateUrl: './submitted-data.component.html',
  styleUrls: ['./submitted-data.component.css']
})
export class SubmittedDataComponent {
  @Input() selectedItem: string = '';
  @Input() selectedGroupItems: any[] = [];

  constructor(private router: Router) { }

  ngOnInit(): void {
   console.log(this.selectedItem)
   console.log(this.selectedGroupItems)
  }
}
