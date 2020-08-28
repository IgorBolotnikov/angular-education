import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ui-hero',
  templateUrl: './ui-hero.component.html',
  styleUrls: ['./ui-hero.component.css']
})
export class UiHeroComponent implements OnInit {
  @Input() id: number;
  @Input() name: string;

  constructor() {
  }

  ngOnInit(): void {
  }
}
